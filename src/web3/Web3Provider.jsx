/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import Web3 from "web3";
import EventEmitter from "wolfy87-eventemitter";
import { useChain } from "../chain/ChainProvider";
import { Goerli } from "../chain/chains/testnet/Goerli";
import { useGeneral } from "../layout/components/general-provider/GeneralProvider";
import { MetamaskConnector } from "../wallet/connectors/metamask/MetamaskConnector";
// import SelectNetworkModal from "../network/components/select-network-modal/SelectNetworkModal";
import { useWallet } from "../wallet/WalletProvider";

export const GoerliHttpsWeb3Provider = new Web3.providers.HttpProvider(Goerli.rpc.httpsUrl)

const CacheHttpsWeb3Provider = {
    [Goerli.rpc.httpsUrl]: GoerliHttpsWeb3Provider,
}

export const WEB3_ERROR_VALUE = 3.9638773911973445e75

const Context = createContext()

export function useWeb3() {
    return useContext(Context)
}

const Web3Provider = props => {
  const { children } = props
  const { windowState } = useGeneral()
  const { activeChain, changeChain, findChain, findChainByChainId, defaultChain } = useChain()

  const wallet = useWallet()

  const event = useMemo(() => new EventEmitter(), [])

  const [blockNumer, setBlockNumber] = useState()
  const [networkSelectVisible, showNetworkSelect] = useState(false)
  
  const httpsWeb3 = useMemo(() => {
    let provider = CacheHttpsWeb3Provider[activeChain.rpc.httpsUrl]
    if (!provider) {
        provider = new Web3.providers.HttpProvider(activeChain.rpc.httpsUrl)
        CacheHttpsWeb3Provider[activeChain.rpc.httpsUrl] = provider
    }

    return new Web3(provider)
  }, [activeChain])

  // const wssWeb3 = useMemo(() => {
  //   if (activeChain.rpc.wssUrl) {
  //     return undefined
  //   }

  //   const provider = new Web3.providers.WebsocketProvider(activeChain.rpc.wssUrl)
  //   return new Web3(provider)
  // }, [activeChain])

  function tryCall (to, from, data, value) {
    return httpsWeb3.eth.call({
      to,
      from,
      data,
      value,
    })
  }

  const getContractAbi = useCallback(
    async (address) => {
      const { apiUrl, key } = activeChain.explorer
      const url = `${apiUrl}/api?module=contract&action=getabi&address=${address}&apikey=${key}`
      const result = await fetch(url);
      const { status, result: result_2 } = await result.json();
      if (status === '1') {
        return JSON.parse(result_2);
      }
      return Promise.reject(result_2);
    },
    [activeChain.explorer],
    )

  useEffect(() => {
    if (wallet.connector instanceof MetamaskConnector) {
      wallet.connector.getProvider().then(provider => {
        provider.on('chainChanged', (chainId) => {
          const network = findChainByChainId(Number(chainId)) ?? defaultChain
          changeChain(network.id)
        })
      })
    }
  }, [wallet.connector])

  const switchNetwork = useCallback(
    async (networkId) => {
      const network = findChain(networkId)

      if (!network) {
          return
      }

      let canSetNetwork = true

      if (wallet.connector instanceof MetamaskConnector && network.metamaskChain) {
        try {
          const error = await wallet.connector.switchChain({
            chainId: network.metamaskChain.chainId,
          })

          if(error) {
            await Promise.reject(error)
          }
        } catch (e) {
          canSetNetwork = false

          if (e.code === 4902 || e.message?.includes('Unrecognized chain ID')) {
            await wallet.connector.addChain(network.metamaskChain)
          }                           
        }
      }

      if (canSetNetwork) {
        changeChain(network.id)
      }
    },
    [wallet.connector],
  )

  // useEffect(() => {
  //   if (!windowState.isVisible || !wssWeb3) {
  //       return undefined
  //   }

  //   wssWeb3.eth
  //       .getBlockNumber()
  //       .then(value => {
  //           if (value) {
  //               setBlockNumber(value)
  //           }
  //       })
  //       .catch(Error)
  //   const subscription = wssWeb3.eth.subscribe('newBlockHeaders')

  //   subscription
  //     .on('data', blockHeader => {
  //         if (blockHeader && blockHeader.number) {
  //             setBlockNumber(blockHeader.number)
  //         }
  //     })
  //     .on('error', () => {
  //         setTimeout(() => {
  //             subscription.subscribe()
  //         }, 1_000)
  //     })
    
  //   return () => {
  //     subscription.unsubscribe?.()
  //   }
  // }, [windowState.isVisible])

  function getEtherscanTxUrl(txHash) {
    return txHash ? `${activeChain.explorer.url}/tx/${txHash}` : undefined
  }
  
  function getEtherscanAddressUrl(address) {
    return address ? `${activeChain.explorer.url}/address/${address}` : undefined
  }

  const value ={
    event,
    blockNumer,
    activeProvider: httpsWeb3,
    switchNetwork,
    showNetworkSelect: () => {
      showNetworkSelect(true)
    },
    tryCall,
    getContractAbi,
    getEtherscanTxUrl,
    getEtherscanAddressUrl,
  }

  return (
    <Context.Provider value={value}>
      {children}
      {/* {networkSelectVisible && <SelectNetworkModal onCancel={() => showNetworkSelect(false)} />} */}
    </Context.Provider>
  )    
}

export default Web3Provider