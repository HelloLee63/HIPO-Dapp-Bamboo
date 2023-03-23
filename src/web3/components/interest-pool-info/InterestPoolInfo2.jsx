import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi as IUniswapV3PoolABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json';

const InterestPoolInfo = ({ children }) => {
  const providerUrl = 'http://127.0.0.1:8545'
  const poolAddress = '0x71C0b51BD49454748fbd179B8A57980FcCaD756D'
  const [price, setPrice] = useState(0);

  const fetchPoolData = async () => {
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    const poolContract = new ethers.Contract(poolAddress, IUniswapV3PoolABI, provider);

    const slot0 = await poolContract.slot0();
    const currentPrice = parseFloat(slot0[0].toString()) / parseFloat(slot0[1].toString());
    setPrice(currentPrice);
  };

  useEffect(() => {
    fetchPoolData();
  }, []);

  console.log(price);

  return (
    // <div>
    //   <div>Token A: {tokenA.symbol} - Reserves: {tokenA.reserves}</div>
    //   <div>Token B: {tokenB.symbol} - Reserves: {tokenB.reserves}</div>
    //   <div>Price: 1 {tokenA.symbol} = {price} {tokenB.symbol}</div>
    // </div>
    <>
      {children}
    </>
  );
};

export default InterestPoolInfo
