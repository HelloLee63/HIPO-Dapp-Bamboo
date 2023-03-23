// eslint-disable-next-line

import { toHex } from "web3-utils";

/* 
  Configurations related to network connection
*/

const RPC_KEY = '75d301c9ba884f80a9935b8536c3ebfa';

export const RPC_HTTPS_URL = `https://goerli.infura.io/v3/${RPC_KEY}`;
export const LOCAL_HOST = 'http://127.0.0.1:8545';
// const RPC_WSS_URL = '';

/* 
  Configurations related to Explorer
*/

// const EXPLORER_KEY = '';
// const EXPLORER_URL = '';

/* 
  Configurations related to Chain
*/

const GOERLI_CHAIN_ID = 5;

/* 
  Configurations related to HIPO contracts
*/

export const GoerliConfig = {
  title: 'Goerli'
}

/* 
  Configurations related to Metamask 
*/

export const GoerliMetamaskChain = {
  chainId: toHex(GOERLI_CHAIN_ID),
  chainName: 'Goerli',
}

/* 
  Configurations of Goerli network
*/

export const Goerli = {
  id: 'Goerli',
  meta: {
    chainId: GOERLI_CHAIN_ID,
    logo: '/media/networks/ethereum-eth.svg',
  },
  rpc: {
    // httpsUrl: RPC_HTTPS_URL,
    httpsUrl: LOCAL_HOST,
    localHostUrl: LOCAL_HOST,
    wssUrl: '',
  },
  financingCenterContract: '0x3e56b276Cb483226b6B8e445C338988b6d07F3C3',
  metamaskChain: GoerliMetamaskChain,
  config: GoerliConfig
}