import { createContext, useContext, useMemo } from "react";

const Context = createContext();

export function useProtocolTokens() {
  return useContext(Context);
}

const ProtocolTokensProvider = ({ children }) => {

  const loanTokens = useMemo(
    () => [
      {
        id: 1,
        symbol: "DAI",
        icon: 'media/loans/dai-5days.svg',
        desc: "5 days",
        duration: 5,
        iPrice: 1 - 0.945
      },
      {
        id: 2,
        symbol: "DAI",
        icon: 'media/loans/dai-10days.svg',
        desc: "10 days",
        duration: 10,
        iPrice: 1 - 0.973
      },
      {
        id: 3,
        symbol: "DAI",
        icon: 'media/loans/dai-15days.svg',
        desc: "15 days",
        duration:15,
        iPrice: 1 - 0.993
      },
      {
        id: 4,
        symbol: "DAI",
        icon: 'media/loans/dai-30days.svg',
        desc: "30 days",
        duration: 30,
        iPrice: 1- 0.99
      },
      {
        id: 5,
        symbol: "DAI",
        icon: 'media/loans/dai-45days.svg',
        desc: "45 days",
        duration: 45,
        iPrice: 1 - 0.968
      },
      {
        id: 6,
        symbol: "DAI",
        icon: 'media/loans/dai-60days.svg',
        desc: "60 days",
        duration: 60,
        iPrice: 1 - 0.978
      },
      {
        id: 7,
        symbol: "USDC",
        icon: 'media/loans/usdc-5days.svg',
        desc: "5 days",
        duration: 5,
        iPrice: 1 - 0.96
      },
      {
        id: 8,
        symbol: "USDC",
        icon: 'media/loans/usdc-10days.svg',
        desc: "10 days",
        duration: 10,
        iPrice: 1 - 0.95
      },
      {
        id: 9,
        symbol: "USDC",
        icon: 'media/loans/usdc-15days.svg',
        desc: "15 days",
        duration: 15,
        iPrice: 1 - 0.987
      },
      {
        id: 10,
        symbol: "USDC",
        icon: 'media/loans/usdc-30days.svg',
        desc: "30 days",
        duration: 30,
        iPrice: 1 - 0.974
      },
      {
        id: 11,
        symbol: "USDC",
        icon: 'media/loans/usdc-45days.svg',
        desc: "45 days",
        duration: 45,
        iPrice: 1 - 0.965
      },
      {
        id: 12,
        symbol: "USDC",
        icon: 'media/loans/usdc-60days.svg',
        desc: "60 days",
        duration: 60,
        iPrice: 1 - 0.99
      },
      {
        id: 13,
        symbol: "USDT",
        icon: 'media/loans/usdt-5days.svg',
        desc: "5 days",
        duration: 5,
        iPrice: 1 - 0.991
      },
      {
        id: 14,
        symbol: "USDT",
        icon: 'media/loans/usdt-10days.svg',
        desc: "10 days",
        duration: 10,
        iPrice: 1 - 0.985
      },
      {
        id: 15,
        symbol: "USDT",
        icon: 'media/loans/usdt-15days.svg',
        desc: "15 days",
        duration: 15,
        iPrice: 1 - 0.925
      },
      {
        id: 16,
        symbol: "USDT",
        icon: 'media/loans/usdt-30days.svg',
        desc: "30 days",
        duration: 30,
        iPrice: 1 - 0.968
      },
      {
        id: 17,
        symbol: "USDT",
        icon: 'media/loans/usdt-45days.svg',
        desc: "45 days",
        duration: 45,
        iPrice: 1 - 0.973
      },
      {
        id: 18,
        symbol: "USDT",
        icon: 'media/loans/usdt-60days.svg',
        desc: "60 days",
        duration: 60,
        iPrice: 1 - 0.997
      },
      {
        id: 19,
        symbol: "WETH",
        icon: 'media/loans/weth-5days.svg',
        desc: "5 days",
        duration: 5,
        iPrice: 1 - 0.983
      },
      {
        id: 20,
        symbol: "WETH",
        icon: 'media/loans/weth-10days.svg',
        desc: "10 days",
        duration: 10,
        iPrice: 1 - 0.988
      },
      {
        id: 21,
        symbol: "WETH",
        icon: 'media/loans/weth-15days.svg',
        desc: "15 days",
        duration: 15,
        iPrice: 1 - 0.99
      },
      {
        id: 22,
        symbol: "WETH",
        icon: 'media/loans/weth-30days.svg',
        desc: "30 days",
        duration: 30,
        iPrice: 1 - 0.997
      },
      {
        id: 23,
        symbol: "WETH",
        icon: 'media/loans/weth-45days.svg',
        desc: "45 days",
        duration: 45,
        iPrice: 1 - 0.998
      },
      {
        id: 24,
        symbol: "WETH",
        icon: 'media/loans/weth-60days.svg',
        desc: "60 days",
        duration: 60,
        iPrice: 1 - 0.992
      },
    ], []
  )

  const value = {
    loanTokens,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default ProtocolTokensProvider