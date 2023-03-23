import React, { createContext, useContext, useEffect, useState } from 'react'
import { useChain } from '../chain/ChainProvider'
import { useFinancingCenterContract } from './ContractManagerProvider'

const Context = createContext()

export function useGlobalInfo() {
    return useContext(Context)
}

const GlobalInfoProvider = ({children}) => {

  const { activeChain } = useChain();
  const [globalInfo, setGlobalInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const financingCenterContract = useFinancingCenterContract(activeChain.financingCenterContract);

  // const getGlobalInfo = async function (financingCenter, signer) {
  // const getGlobalInfo = async function () {
  //   console.log("context financingCenter", activeChain.financingCenterContract);
  //   let reserveMap = new Map();
  //   let collateralNFTMap = new Map();
  //   let slotMap = new Map();
  //   let assetSet = new Set();
  //   const totalSlots = await financingCenterContract.totalSlots();
  //   for (let i = 0; i < totalSlots.toNumber(); i++) {
  //     const slotId = await financingCenterContract.slotIdByIndex(i);
  //     const slot = await financingCenterContract.slotById(slotId);
  //     var slotObj = {
  //       asset: slot.asset,
  //       duration: slot.duration
  //     };
  //     slotMap.set(slotId, slotObj);
  //     assetSet.add(slot.asset);
  //   }
  //   // for (var asset of assetSet) {
  //   //   const reserve = await financingCenter.reserveByAsset(asset);
  //   //   var assetToken = new Contract(asset, ERC20.abi, signer);
  //   //   var reserveObj = {
  //   //     name: await assetToken.name(),
  //   //     symbol: await assetToken.symbol(),
  //   //     reservePool: reserve.reservePool,
  //   //     debtToken: reserve.debtToken,
  //   //     creditToken: reserve.creditToken
  //   //   };
  //   //   reserveMap.set(asset, reserveObj);
  //   // };
  
  //   // const totalCollateralNFTAsset = await financingCenter.totalCollateralNFTAssets();
  //   // console.log("totalCollateralNFTAsset:", totalCollateralNFTAsset);
  //   // for (let i = 0; i < totalCollateralNFTAsset.toNumber(); i++) {
  //   //   const colAssetAddr = await financingCenter.collateralNFTAssetOfIndex(i);
  //   //   console.log("colAssetAddr:", colAssetAddr);
  //   //   console.log(financingCenter.collateralNFTOf(colAssetAddr));
  //   //   console.log(await financingCenter.collateralNFTOf(colAssetAddr));
  //   //   const colNFTAddr = await financingCenter.collateralNFTOf(colAssetAddr);
  //   //   console.log("colNFTAddr:", colNFTAddr);
  //   //   var colNFT = new Contract(colNFTAddr, ICollateralNFTArtifact.abi, signer);
  //   //   var hipoNFT = new Contract(colNFTAddr, ERC721.abi, signer);
  //   //   console.log("hipo nft name:", await hipoNFT.name())
  //   //   const colNFTName = await hipoNFT.name();
  //   //   const totalSubTokens = await colNFT.totalSubTokens();
  //   //   let subTokens = [];
  //   //   for (let j = 0; j < totalSubTokens.toNumber(); j++) {
  //   //     var subTokenAddr = await colNFT.subTokenByIndex(j);
  //   //     var subTokenSymbol = await getSubTokenSymbol(colNFT, subTokenAddr, signer);
  //   //     var subToken = {
  //   //       name: colNFTName + "-" + subTokenSymbol,
  //   //       symbol: subTokenSymbol,
  //   //       address: subTokenAddr,
  //   //       maxLtv: (await colNFT.getLtv(subTokenAddr)).div(BigNumber.from(100000)),
  //   //       liquidationThreshold: await colNFT.getLiquidationThreshold(subTokenAddr)
  //   //     };
  //   //     subTokens.push(subToken);
  //   //   }
  //   //   var collateral = {
  //   //     address: colNFT.address,
  //   //     name: colNFTName,
  //   //     symbol: await hipoNFT.symbol(),
  //   //     subTokens: subTokens
  //   //   };
      
  //   //   collateralNFTMap.set(colAssetAddr, collateral);
  //   // }
  //   // console.log("collateralList", collateralList);
  //   var info = {
  //       slots: slotMap,
  //       // reserves: reserveMap,
  //       // collateralNFTs: collateralNFTMap
  //   };
  //   return info;
  // }

  useEffect(() => {
    // const info = getGlobalInfo();
    // setGlobalInfo(info);
  }, [])

  const value = {
    globalInfo,
    isLoading,
  }

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}

export default GlobalInfoProvider