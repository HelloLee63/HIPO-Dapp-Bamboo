import BigNumber from "bignumber.js"

export function formatPercent(value, decimals = 2) {
  if(value === undefined || Number.isNaN(value)) {
    return undefined
  }

  const rate = BigNumber.isBigNumber(value) ? value.toNumber() : value

  return Intl.NumberFormat('en', {
    style: 'percent',
    maximumFractionDigits: decimals,
  }).format(rate)
}

export function calAPY(price, duration) {
  // price is the price of interest token, such as 0.01 usdt.

  if (price === undefined || Number.isNaN(price)) {
    return undefined
  }

  const value = BigNumber.isBigNumber(price) ? price.toNumber() : price

  return formatPercent((value / duration * 365) / (1 - value))
}