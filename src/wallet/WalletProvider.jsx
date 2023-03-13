// eslint-disable-next-line

import { UnsupportedChainIdError, useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { NoEthereumProviderError, UserRejectedRequestError } from "@web3-react/injected-connector";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useSessionStorage } from "react-use-storage";
import Web3 from "web3";
import EventEmitter from "wolfy87-eventemitter";
import { useChain } from "../chain/ChainProvider";
// import Modal from "../components/modal/Modal";
import InstallMetamaskModal from "./components/install-metamask-modal/InstallMetamaskModal";
import SelectWalletModal from "./components/select-wallet-modal/SelectWalletModal";
// import SwitchChainModal from "./components/switch-chain-modal/SwitchChainModal";
import MetamaskWalletConfig from "./connectors/metamask/MetamaskConnector";

/* 
  Create wallet hook: useWallet() 
*/

const Context = createContext();

export function useWallet() {
  return useContext(Context);
}

/* 
  Add other wallet connector 
*/

export const WalletConnectors = [
  MetamaskWalletConfig,
];

const Web3WalletProvider = props => {

  const { children } = props;
  const { activeChain } = useChain();
  const web3React = useWeb3React();

  const [sessionProvider, setSessionProvider, removeSessionProvider] = useSessionStorage('wallet_provider');
  const event = useMemo(() => new EventEmitter(), [])
  const [connecting, setConnecting] = useState();
  const [initialized, setInitialized] = useState(false);
  const connectingRef = useRef(connecting);

  /* 
    TODO: Test: Is it possible to remove this line 
  */

  connectingRef.current = connecting;
  const [activeMeta, setActiveMeta] = useState();

  /* 
    Account states 
  */

  const [ethBalance, setEthBalance] = useState();
  const [ensName, setENSName] = useState();
  const [ensAvatar, setENSAvatar]= useState();

  /* 
    Modal controllers 
  */

  const [selectWalletModal, setSelectWalletModal] = useState(false);
  const [installMetaMaskModal, setInstallMetaMaskModal] = useState(false);
  // const [unsupportedChainModal, setUnsupportedChainModal] = useState(false);
  // const [userRejectedModal, setUserRejectedModal] = useState(false);

  /* 
    
  */

  const preConnectedAccount = useRef(web3React.account)
  if (preConnectedAccount.current !== web3React.account) {
    preConnectedAccount.current = web3React.account
    event.emit('UPDATE_ACCOUNT', web3React.account)
  }

  /* 
    Disconnect wallet handler 
  */

  const disconnect = useCallback(() => {
    web3React.deactivate()
    activeMeta?.onDisconnect?.(web3React.connector)
    setConnecting(undefined)
    setActiveMeta(undefined)
    setEthBalance(undefined)
    removeSessionProvider()
  }, [web3React, activeMeta, removeSessionProvider, setConnecting, setActiveMeta, setEthBalance])

  /* 
    Connect wallet handler 
  */

  const connect = useCallback(
    async (walletConfig) => {

      /* The status of connecting */

      if(connectingRef.current) {
        return
      }

      connectingRef.current = walletConfig
      setConnecting(walletConfig);

      setSelectWalletModal(false);
      setInstallMetaMaskModal(false);
      // setUnsupportedChainModal(false);
      // setUserRejectedModal(false);

      const connector = walletConfig.factory(activeChain);

      /* Errors handlers: 
      /* No wallet available, 
      /* unsupported chain, 
      /* user rejected connection request, 
      /* and other errors. */
      
      function onError(error) {
        if(error instanceof NoEthereumProviderError) {
          setInstallMetaMaskModal(true)
          disconnect()
        } else if(error instanceof UnsupportedChainIdError) {
          // setUnsupportedChainModal(true)
          disconnect()
        } else if(error instanceof UserRejectedRequestError) {
          // setUserRejectedModal(true)
          disconnect()
        } else {
          const err = walletConfig.onError?.(error)
          
          if(err) {
            console.log(err.message);
          }
          disconnect()
        }
      }

      function onSuccess() {
        if (!connectingRef.current) {
          return
        }

        walletConfig.onConnect?.(connector)
        setActiveMeta(walletConfig)
        setSessionProvider(walletConfig.id)
      }

      await web3React.activate(connector, undefined, true).then(onSuccess).catch(onError)
      setConnecting(undefined)

      // try {
        
      //   const currentProviderChainId = await connector.getChainId()
        
      //   if(currentProviderChainId === activeNetwork.metamaskChain.chainId) {
      //     await web3React.activate(connector, undefined, true)
      //       .then(onSuccess)
      //       .catch(onError)
      //   } else {
      //     setUnsupportedChainModal(true);
      //   }
        
      //   setConnecting(undefined);

      // } catch(error) {
      //   if(error instanceof NoEthereumProviderError) {
      //     setInstallMetaMaskModal(true)
      //     disconnect()
      //   }
      // }       
    },
    [web3React, connectingRef, setConnecting, setSessionProvider, activeChain, disconnect],
  )

  const changeChain = async (setError) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");

      if (activeChain.meta.chainId === 1 || activeChain.meta.chainId === 5) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              "chainId": `0x${Number(activeChain.meta.chainId).toString(16)}`,
            }
          ]
        });
      } else {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",          
          params: [
            {
              "chainId": `0x${Number(activeChain.meta.chainId).toString(16)}`,
            }
          ]
        });
      }
      
    } catch (err) {
      setError(err.message);
    }
  };

  /* 
    Use effect to update the account states 
  */

  useEffect(() => {

    /* Reset account states to undefined */

    setEthBalance(undefined);
    setENSName(undefined);
    setENSAvatar(undefined);

    const account = web3React.account;

    if(account && Web3.utils.isAddress(account)) {
      const ethWeb3 = new Web3(web3React.library);

      /* Balance of the account */

      ethWeb3.eth
        .getBalance(account)
        .then(value => {
          setEthBalance(value ? new BigNumber(value) : undefined);
        })
        .catch(Error);
      
      /* ENS name and avatar of the account */

      const provider = new ethers.providers.JsonRpcProvider(activeChain.rpc.httpsUrl);
      provider
        .lookupAddress(account)
        .then(value => {
          setENSName(value ?? undefined);
          if(value) {
            provider
              .getAvatar(value ?? '')
              .then(value => {
                setENSAvatar(value ?? undefined);
              })
              .catch(Error);
          }
        })
        .catch(Error)
    }
  }, [web3React.account, activeChain, web3React.library])

  /* 
    Accroding to session to restore states of the account 
  */
  
  useEffect(() => {
    (async () => {
      if(sessionProvider) {
        const walletConnector = WalletConnectors.find(conn => conn.id === sessionProvider);

        if(walletConnector) {
          await connect(walletConnector)
        }
      }
      setInitialized(true);
    })()
  // eslint-disable-next-line
  },[])

  const value = {
    initialized,
    connecting,
    isActive: web3React.active,
    account: web3React.account ?? undefined,
    meta: activeMeta,
    connector: web3React.connector,
    provider: web3React.library,
    ethBalance,
    connect,
    disconnect,
    showWalletsModal: () => {
      setSelectWalletModal(true);
    },
    closeSelectWalletModal: () => {
      setSelectWalletModal(false)
    },
    closeInstallWalletModal: () => {
      setInstallMetaMaskModal(false)
    },
    showSwichChainModal: () => {
      // setUnsupportedChainModal(false);
    },
    changeChain,
    event,
    ens: {
      name: ensName,
      avatar: ensAvatar,
    }
  }

  return (
    <Context.Provider value={value}>
      { children }
      { selectWalletModal && <SelectWalletModal /> }
      {/* { userRejectedModal && <Modal />}
      { unsupportedChainModal && <SwitchChainModal />} */}
      { installMetaMaskModal && <InstallMetamaskModal />}
    </Context.Provider>
  )
}

const WalletProvider = props => {

  const { children } = props

  return (
    <Web3ReactProvider getLibrary={library => library}>
      <Web3WalletProvider>
        { children }
      </Web3WalletProvider>
    </Web3ReactProvider>
  )
}

export default WalletProvider
