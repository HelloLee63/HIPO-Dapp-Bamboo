import React, { useEffect, useState } from 'react';
import { Pool } from '@uniswap/v3-sdk';
import { Token, WETH9 } from '@uniswap/sdk-core';
import { ethers } from 'ethers';
import { abi as IUniswapV3PoolABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json';

const InterestPoolInfo = () => {
  const providerUrl = 'http://127.0.0.1:8545'
  const poolAddress = '0xCFD6D19813788B849a703d9345E5714484337F7b'
  const [tokenA, setTokenA] = useState({});
  const [tokenB, setTokenB] = useState({});
  const [price, setPrice] = useState(0);

  const fetchPoolData = async () => {
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    const poolContract = new ethers.Contract(poolAddress, IUniswapV3PoolABI, provider);

    const slot0 = await poolContract.slot0();
    console.log(slot0);
    const currentPrice = parseFloat(slot0[0].toString()) / parseFloat(slot0[1].toString());

    const token0Address = await poolContract.token0();
    console.log('token0Address is :', token0Address);
    const token1Address = await poolContract.token1();
    console.log('token0Address is :', token1Address);

    const token0 = new Token(1, token0Address, 18);
    const token1 = new Token(1, token1Address, 18);

    const liquidity = await poolContract.liquidity();
    const sqrtPriceX96 = slot0[0];
    const sqrtPriceAX96 = slot0[1];
    const pool = new Pool(token0, token1, 3000, sqrtPriceX96, liquidity, sqrtPriceAX96);

    const token0Reserves = pool.reserve0?.toFixed(2);
    const token1Reserves = pool.reserve1?.toFixed(2);

    setTokenA({ symbol: token0.symbol, reserves: token0Reserves });
    setTokenB({ symbol: token1.symbol, reserves: token1Reserves });
    setPrice(currentPrice);
  };

  useEffect(() => {
    fetchPoolData();
  }, []);

  return (
    <div>
      <div>Token A: {tokenA.symbol} - Reserves: {tokenA.reserves}</div>
      <div>Token B: {tokenB.symbol} - Reserves: {tokenB.reserves}</div>
      <div>Price: 1 {tokenA.symbol} = {price} {tokenB.symbol}</div>
    </div>
    // <>
    //   {children}
    // </>
  );
};

export default InterestPoolInfo
