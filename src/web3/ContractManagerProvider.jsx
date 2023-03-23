import { createContext, useContext, useRef } from "react";
import { useReload } from "../hooks/useReload";
import { useWallet } from "../wallet/WalletProvider";
import ContractListener from "./components/contract-listener/ContractListener";
import Web3Contract from "./web3Contract";
import { useWeb3 } from "./Web3Provider";
import FinancingCenterContract from "./contracts/FinancingCenterContract";
import Erc20Contract from "./contracts/erc20Contract";

const Context = createContext()

export function useContractManager() {
  return useContext(Context)
}

export function useContract(address, factory) {
  const [reload] = useReload()
  const manager = useContractManager()

  const contract = manager.getContract(address, factory)

  contract.on(Web3Contract.UPDATE_DATA, reload)
  return contract
}

export function useErc20Contract(address, abi = []) {
  const [reload] = useReload()
  const manager = useContractManager()

  if (!address) {
    return undefined
  }

  const contract = manager.getContract(address, () => new Erc20Contract(abi, address))
  
  contract.on(Web3Contract.UPDATE_DATA, reload)

  return contract
}

export function useFinancingCenterContract(address, abi = []) {
  const [reload] = useReload()
  const manager = useContractManager()

  if (!address) {
    return undefined
  }

  const contract = manager.getContract(address, () => new FinancingCenterContract(address))
  
  contract.on(Web3Contract.UPDATE_DATA, reload)

  return contract
}

const ContractManagerProvider = props => {

  const { children } = props

  const wallet = useWallet()
  const web3 = useWeb3()
  const contractsRef = useRef(new Map())
  const [reload] = useReload()

  const web3ProviderRef = useRef(web3.activeProvider)

  if (web3ProviderRef.current !== web3.activeProvider) {
    web3ProviderRef.current = web3.activeProvider

    contractsRef.current.forEach(contract => {
      contract.setCallProvider(web3.activeProvider)
    })

    reload()
  }

  const walletProviderRef = useRef(wallet.provider)

  if(walletProviderRef.current !== wallet.provider) {
    walletProviderRef.current = wallet.provider

    contractsRef.current.forEach(contract => {
      contract.setProvider(wallet.provider)
    })

    reload()
  }

  const walletAccountRef = useRef(wallet.account)

  if (walletAccountRef.current !== wallet.account) {
    walletAccountRef.current = wallet.account

    contractsRef.current.forEach(contract => {
      contract.setAccount(wallet.account)
    })

    reload()
  }

  function getContract(address, factory) {
    let contract

    if (!contractsRef.current.has(address)) {
      contract = factory?.() ?? new Web3Contract([], address, '')
      contract.setCallProvider(web3ProviderRef.current)
      contract.setProvider(walletProviderRef.current)            
      contract.setAccount(walletAccountRef.current)

      contractsRef.current.set(address, contract)
      reload()
    } else {
      contract = contractsRef.current.get(address)
    }

    return contract
  }

  const value = {
    getContract,
  }

  return (
    <Context.Provider value={value}>
      {children}
      {Array.from(contractsRef.current).map(([address, contract]) => (
        <ContractListener key={address} contract={contract} />
      ))}
    </Context.Provider>
  )
}

export default ContractManagerProvider