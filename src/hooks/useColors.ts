import { useTheme } from '@react-navigation/native'
import { TThemeColors } from 'res/theme'

export type useColorsType = () => TThemeColors
export const useColors: useColorsType = () => {
  const { colors } = useTheme()

  return colors as unknown as TThemeColors
}
