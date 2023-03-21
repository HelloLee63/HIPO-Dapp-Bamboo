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
      },
      {
        id: 2,
        symbol: "DAI",
        icon: 'media/loans/dai-10days.svg',
        desc: "10 days",
      },
      {
        id: 3,
        symbol: "DAI",
        icon: 'media/loans/dai-15days.svg',
        desc: "15 days",
      },
      {
        id: 4,
        symbol: "DAI",
        icon: 'media/loans/dai-30days.svg',
        desc: "30 days",
      },
      {
        id: 5,
        symbol: "DAI",
        icon: 'media/loans/dai-45days.svg',
        desc: "45 days",
      },
      {
        id: 6,
        symbol: "DAI",
        icon: 'media/loans/dai-60days.svg',
        desc: "60 days",
      },
      {
        id: 7,
        symbol: "USDC",
        icon: 'media/loans/usdc-5days.svg',
        desc: "5 days",
      },
      {
        id: 8,
        symbol: "USDC",
        icon: 'media/loans/usdc-10days.svg',
        desc: "10 days",
      },
      {
        id: 9,
        symbol: "USDC",
        icon: 'media/loans/usdc-15days.svg',
        desc: "15 days",
      },
      {
        id: 10,
        symbol: "USDC",
        icon: 'media/loans/usdc-30days.svg',
        desc: "30 days",
      },
      {
        id: 11,
        symbol: "USDC",
        icon: 'media/loans/usdc-45days.svg',
        desc: "45 days",
      },
      {
        id: 12,
        symbol: "USDC",
        icon: 'media/loans/usdc-60days.svg',
        desc: "60 days",
      },
      {
        id: 13,
        symbol: "USDT",
        icon: 'media/loans/usdt-5days.svg',
        desc: "5 days",
      },
      {
        id: 14,
        symbol: "USDT",
        icon: 'media/loans/usdt-10days.svg',
        desc: "10 days",
      },
      {
        id: 15,
        symbol: "USDT",
        icon: 'media/loans/usdt-15days.svg',
        desc: "15 days",
      },
      {
        id: 16,
        symbol: "USDT",
        icon: 'media/loans/usdt-30days.svg',
        desc: "30 days",
      },
      {
        id: 17,
        symbol: "USDT",
        icon: 'media/loans/usdt-45days.svg',
        desc: "45 days",
      },
      {
        id: 18,
        symbol: "USDT",
        icon: 'media/loans/usdt-60days.svg',
        desc: "60 days",
      },
      {
        id: 19,
        symbol: "WETH",
        icon: 'media/loans/weth-5days.svg',
        desc: "5 days",
      },
      {
        id: 20,
        symbol: "WETH",
        icon: 'media/loans/weth-10days.svg',
        desc: "10 days",
      },
      {
        id: 21,
        symbol: "WETH",
        icon: 'media/loans/weth-15days.svg',
        desc: "15 days",
      },
      {
        id: 22,
        symbol: "WETH",
        icon: 'media/loans/weth-30days.svg',
        desc: "30 days",
      },
      {
        id: 23,
        symbol: "WETH",
        icon: 'media/loans/weth-45days.svg',
        desc: "45 days",
      },
      {
        id: 24,
        symbol: "WETH",
        icon: 'media/loans/weth-60days.svg',
        desc: "60 days",
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