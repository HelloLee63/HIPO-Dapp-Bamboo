export function shortenAddr(addr, first = 6, last = 4) {
    return addr ? [String(addr).slice(0, first), String(addr).slice(-last)].join('...') : undefined;
  }