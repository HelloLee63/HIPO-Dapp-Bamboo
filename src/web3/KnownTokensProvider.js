import { createContext, useContext, useMemo } from "react";
import { toPercentage } from "../helpers/format-number";

const Context = createContext();

export function useKnownTokens() {
  return useContext(Context);
}

const KnownTokensProvider = ({ children }) => {

  const dexLpTokens = useMemo(
    () => [
      {
        symbol: "DAI/WETH",
        icon: 'media/tokens/dai-weth.svg',
        desc: "",
        maxLtv: (() => toPercentage(0.85))(),
        liquidationThreshold: (() => toPercentage(0.90))(),
      },
      {
        symbol: "USDC/WETH",
        icon: 'media/tokens/usdc-weth.svg',
        desc: "",
        maxLtv: (() => toPercentage(0.85))(),
        liquidationThreshold: (() => toPercentage(0.90))(),
      },
      {
        symbol: "USDT/WETH",
        icon: 'media/tokens/usdt-weth.svg',
        desc: "",
        maxLtv: (() => toPercentage(0.85))(),
        liquidationThreshold: (() => toPercentage(0.90))(),
      },
    ], []
  )

  const loanTokens = useMemo(
    () => [
      {
        symbol: "DAI",
        icon: 'media/tokens/dai.svg',
        desc: "",
      },
      {
        symbol: "USDC",
        icon: 'media/tokens/usdc.svg',
        desc: "",
      },
      {
        symbol: "USDT",
        icon: 'media/tokens/usdt.svg',
        desc: "",
      },
      {
        symbol: "WETH",
        icon: 'media/tokens/weth.svg',
        desc: "",
      },
    ], []
  )

  const value = {
    dexLpTokens,
    loanTokens,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default KnownTokensProvider