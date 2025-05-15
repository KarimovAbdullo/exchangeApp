import * as RN from 'react-native'
import {
  ImageStyle as DefaultImageStyle,
  StyleProp,
  TextStyle,
} from 'react-native'
import { ImageStyle } from 'react-native-fast-image'
import { NamedStyles } from 'react-native-size-matters'
import { ScaledSheet } from 'react-native-size-matters/extend'
import R from 'res'
import { TThemeColors } from 'res/theme'

export type createStylesType = <U, T = NamedStyles<U> | NamedStyles<any>>(
  callback: (colors: TThemeColors, fonts: typeof R.fonts, isDark: boolean) => T,
) => (
  colors: TThemeColors,
  fonts: typeof R.fonts,
  isDark: boolean,
) => {
  [P in keyof T]: RN.RegisteredStyle<T[P]> &
    StyleProp<TextStyle> &
    StyleProp<ImageStyle> &
    StyleProp<DefaultImageStyle>
}

export const createStyles: createStylesType =
  // @ts-ignore
  callback => (colors: TThemeColors, fonts: typeof R.fonts, isDark: boolean) =>
    // @ts-ignore
    ScaledSheet.create(callback(colors, fonts, isDark))
