import { ColorValue } from 'react-native'
import R from 'res'

export const getIconByTicker = (ticker?: string, color?: ColorValue) => {
  switch (ticker) {
    case 'BTC':
      return <R.icons.BitcoinIcon color={color} />
    case 'ETH':
      return <R.icons.EthIcon color={color} />
    case 'USDT':
      return <R.icons.UstdIcon color={color} />
    case 'SOL':
      return <R.icons.SolanaIcon color={color} />
    case 'DOGE':
      return <R.icons.DodgeIcon color={color} />
    case 'TRX':
      return <R.icons.TronIcon color={color} />
    default:
      return <R.icons.BitcoinIcon color={color} />
  }
}
