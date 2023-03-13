import { toHex } from "web3-utils";

/* Configurations related to network connection */

const RPC_KEY = '75d301c9ba884f80a9935b8536c3ebfa';

export const RPC_HTTPS_URL = `https://mainnet.infura.io/v3/${RPC_KEY}`;
// const RPC_WSS_URL = '';

/* Configurations related to Explorer */

// const EXPLORER_KEY = '';
// const EXPLORER_URL = '';

/* Configurations related to Chain */

const ETHEREUM_CHAIN_ID = 1;

/* Configurations related to HIPO contracts */

export const EthereumConfig = {
  title: 'Ethereum'
}

/* Configurations related to Metamask */

export const EthereumMetamaskChain = {
  chainId: toHex(ETHEREUM_CHAIN_ID),
  chainName: 'Ethereum',
}

/* Configurations of Ethereum mainnet */

export const Ethereum = {
  id: 'Ethereum',
  meta: {
    chainId: ETHEREUM_CHAIN_ID,
    logo: '/media/networks/ethereum-eth.svg',
  },
  rpc: {
    httpsUrl: RPC_HTTPS_URL,
    wssUrl: '',
  },
  metamaskChain: EthereumMetamaskChain,
  config: EthereumConfig
}