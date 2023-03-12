export function formatValueWithSymbol(value) {
  value = value.toString().replace(/[^0-9.]/g, '');
  if (value < 1000) {
    return value;
  }
  const si = [
    {v: 1E3, s: "K"},
    {v: 1E6, s: "M"},
    {v: 1E9, s: "B"},
    {v: 1E12, s: "T"},
    {v: 1E15, s: "P"},
    {v: 1E18, s: "E"}
    ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (value >= si[index].v) {
      break;
    }
  }
  return (value / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
}

export function formatDateTime(
  date,
  options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  },
) {
  if (!date) return '';
  if (typeof date === 'number' || typeof date === 'string') {
    date = new Date(date);
  }

  return date.toLocaleString(navigator.language ?? navigator.languages, options);
}