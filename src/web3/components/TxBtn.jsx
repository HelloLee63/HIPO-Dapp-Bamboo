import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useWallet } from '../../wallet/WalletProvider';

// import detectEthereumProvider from '@metamask/detect-provider';
// import { Contract } from 'web3-eth-contract';
// import { ERC20_ABI, ERC20_ADDRESS } from './constants';

const TxBtn = ({text, className}) => {
  const wallet = useWallet()
  

  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [balance, setBalance] = useState(0);
  const [isApproved, setIsApproved] = useState(false);

  useEffect(() => {
    async function init() {
      
      if (wallet.account) {
        setWalletConnected(true);
        
        // const balance = await web3Instance.eth.getBalance(wallet.account);
        // setBalance(parseFloat(web3Instance.utils.fromWei(balance)));

        // 检查用户是否已调用 approve 方法
        // const tokenContract = new web3Instance.eth.Contract(ERC20_ABI, ERC20_ADDRESS);
        // const allowance = await tokenContract.methods.allowance(accounts[0], YOUR_CONTRACT_ADDRESS).call();
        // setIsApproved(parseFloat(allowance) > 0);
      }
      if (!wallet.account) {
        setWalletConnected(false);
      }
    }
    init();
  }, [wallet.account]);

  const connectWallet = async () => {
    if (wallet.connecting || wallet.account) {
      return
    }
    wallet.showWalletsModal()
  };

  // const approveToken = async () => {
  //   const tokenContract = new web3.eth.Contract(ERC20_ABI, ERC20_ADDRESS);
  //   const amountToApprove = web3.utils.toWei('100'); // 设置需要批准的金额

  //   try {
  //     await tokenContract.methods.approve(YOUR_CONTRACT_ADDRESS, amountToApprove).send({ from: account });
  //     setIsApproved(true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const submitTransaction = async () => {
    // 在这里添加提交交易的代码
  };

  const handleClick = () => {
    if (!walletConnected) {
      connectWallet()
    } else if (!isApproved) {
      // approveToken();
    } else if (balance <= 0) {
      alert('balance is not enough');
    } else {
      submitTransaction();
    }
  };

  return (
    <button 
      type='button' 
      className={clsx("w-full h-12 items-center rounded-10px  px-3 py-2 text-base font-semibold font-Poppins", className)}
      onClick={handleClick}
    >
      {walletConnected ? (isApproved ? {text} : 'Approve') : 'Wallet Connect'}
    </button> 
  );
};

export default TxBtn;
