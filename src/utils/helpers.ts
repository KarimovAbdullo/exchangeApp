import { formatCurrency } from 'react-native-format-currency'

type FormatType = 'VALUE' | 'CURRENCY' | 'ALL'

export const showAmount = (
  amount: number | string,
  currency: string = 'USD',
  type: FormatType = 'ALL',
) => {
  let newAmount = Number((Math.round(Number(amount) * 100) / 100).toFixed(2))
  newAmount = isNaN(newAmount) ? 0 : newAmount

  if (type === 'ALL') {
    if (newAmount < 0) {
      return (
        '-' +
        formatCurrency({
          code: currency,
          amount: newAmount,
        })[0].replace('-', '')
      )
    }
    return formatCurrency({
      code: currency,
      amount: newAmount,
    })[0]
  }
  if (type === 'VALUE') {
    return formatCurrency({ code: currency, amount: newAmount })[1]
  }
  if (type === 'CURRENCY') {
    return formatCurrency({ code: currency, amount: newAmount })[2]
  }

  return 0
}

export const wait = (millisecond: number = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(null), millisecond)
  })
}
