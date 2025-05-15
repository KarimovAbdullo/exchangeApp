const currencyRates: Record<string, number> = {
  BTC: 98289.38,
  ETH: 2500.5,
  SOL: 80.25,
  LTC: 120.75,
  XRP: 0.9,
}

const convertSwapExchange = (
  fromCurrency: string,
  toCurrency: string,
): number => {
  if (!currencyRates[fromCurrency] || !currencyRates[toCurrency]) {
    return 0
  }

  const fromRate = currencyRates[fromCurrency]
  const toRate = currencyRates[toCurrency]

  return fromRate / toRate
}

export default convertSwapExchange
