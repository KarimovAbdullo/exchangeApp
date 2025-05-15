export function formatCoinsZeros(value: any) {
  if (value === null || value === undefined) {
    return '0'
  }
  let formattedValue = parseFloat(value).toFixed(8)
  return parseFloat(formattedValue).toString()
}
