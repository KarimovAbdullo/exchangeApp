const currencyRates = {
  BTC: 98289.38,
  ETH: 2500.5,
  SOL: 80.25,
  LTC: 120.75,
  XRP: 0.9,
}

const convertCurrency = (currency: string, value: number): number => {
  switch (currency) {
    case 'BTC':
      return value * currencyRates.BTC
    case 'ETH':
      return value * currencyRates.ETH
    case 'SOL':
      return value * currencyRates.SOL
    case 'LTC':
      return value * currencyRates.LTC
    case 'XRP':
      return value * currencyRates.XRP
    default:
      return 0
  }
}

export default convertCurrency
