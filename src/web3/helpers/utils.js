import BigNumber from "bignumber.js";

export function getExponentValue(decimals = 0) {
    return new BigNumber(10).pow(decimals);
  }
  
  export function getHumanValue(value, decimals = 0) {
    return new BigNumber(value)?.div(getExponentValue(decimals));
  }
  
  export function getNonHumanValue(value, decimals = 0) {
    return new BigNumber(value).multipliedBy(getExponentValue(decimals));
  }
  
  export function getGasValue(price) {
    return getNonHumanValue(price, 9).toNumber();
  }

  export function formatBigValue(
    value,
    decimals = 4,
    defaultValue = '-',
    minDecimals = undefined,
  ) {
    if (value === undefined) {
      return defaultValue;
    }
      
    const bnValue = new BigNumber(value);
  
    if (isNaN(bnValue)) {
      return defaultValue;
    }

    return new BigNumber(bnValue.toFixed(decimals)).toFormat(minDecimals)
  }

  export function formatToken(
    value,
    options
  ) {
    if (value === undefined || value === null || Number.isNaN(value)) {
      return undefined;
    }
  
    let val = new BigNumber(value);
  
    if (val.isNaN()) {
      return undefined;
    }
  
    if (options) {
      if (options.hasOwnProperty('scale') && options.scale === undefined) {
        return undefined;
      }
    }
  
    const { tokenName, compact = false, decimals = 4, minDecimals, scale = 0, hasLess = false } = options ?? {};
  
    if (scale > 0) {
      val = unscaleBy(val, scale);
    }
  
    let str = '';
  
    if (hasLess) {
      if (val.gt(new BigNumber(0)) && val.lt(1 / 10 ** decimals)) {
        str += '> ';
      }
    }
  
    if (compact && val.gt(1_000)) {
      str += Intl.NumberFormat('en', {
        notation: 'compact',
        maximumFractionDigits: 2,
      }).format(val.toNumber());
    } else {
      str += new BigNumber(val.toFixed(decimals)).toFormat(minDecimals);
    }
  
    if (tokenName) {
      str += ` ${tokenName}`;
    }
  
    return str;
  }

  export function unscaleBy(BigValue, decimals) {

    if (decimals === undefined) {
      return undefined
    }

    if(BigValue === undefined) {
      return undefined
    }

    const value = new BigNumber(BigValue)
    const divider = new BigNumber((10 ** decimals).toString())

    return value.div(divider)
  }

  export function scaleBy(value, decimals) {
    if (decimals === undefined) {
      return undefined
    }

    if (value === undefined) {
      return undefined
    }

    const BigValue = new BigNumber(value)
    const multiper = new BigNumber(10 ** decimals)

    return BigValue.multipliedBy(multiper)
  }

  export function calAPY(value, decimals, duration) {
    if (decimals === undefined) {
      return undefined
    }

    if (value === undefined) {
      return undefined
    }

    if (new BigNumber(value).eq(0)) {
      return 0
    }

    let BigValue = new BigNumber(value)
    let BigValueOne = new BigNumber(1)

    BigValueOne = scaleBy(BigValueOne, decimals, duration)
    let APY = (BigValueOne.minus(BigValue)).div(duration).multipliedBy(365 * 24 * 60 * 60)

    return formatToken(APY, {decimals: 8, scale: decimals})
  }

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

  export function shortenAddr(addr, first = 6, last = 4) {
    return addr ? [String(addr).slice(0, first), String(addr).slice(-last)].join('...') : undefined;
  }