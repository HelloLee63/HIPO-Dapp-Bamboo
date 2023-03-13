import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useSessionStorage } from 'react-use-storage';
import { Ethereum } from './chains/mainnet/Ethereum';
import { Goerli } from './chains/testnet/Goerli';

const Context = createContext();

export function useChain() {
  return useContext(Context);
}

const chains = (() => {
  return [
    Goerli, 
    Ethereum,
  ];
})();

const ChainProvider = props => {

  const { children } = props;

  const [lastChain, setLastChain] = useSessionStorage('last_chain');

  const initialChain = useMemo(() => {
    let chain
    try {
      if(lastChain) {
        const chainId = lastChain?.toLowerCase();
        chain = chains.find(c => c.id.toLowerCase() === chainId);
      }
    } catch {}

    return chain ?? chains[0];
  }, [lastChain])

  const [activeChain] = useState(initialChain);

  const findChain = useCallback(
    (chainId) => {
      return chains.find(c => c.id.toLowerCase() === chainId);
    },
    []
  )

  const findChainByChainId = useCallback(
    (chainId) => {
      return chains.find(c => c.meta.chainId === chainId);
    },
    []
  )

  const changeChain = useCallback(
    (chainId) => {
      const chain = findChainByChainId(chainId)
      if(chain) {
        setLastChain(chain.id.toLowerCase());
        window.location.reload();
      }

      return chain;
    },
    [findChainByChainId, setLastChain]
  )

  useEffect(() => {
    window.document.title = activeChain.config.title
  }, [activeChain])

  const value = {
    chains,
    defaultChain: chains[0],
    activeChain,
    findChain,
    findChainByChainId,
    changeChain,
  }

  return (
    <Context.Provider value={value}>{ children }</Context.Provider>
  )
}

export default ChainProvider