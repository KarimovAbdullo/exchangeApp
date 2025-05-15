import { useTheme } from '@react-navigation/native';
import R from 'res';
import { TThemeColors } from 'res/theme';

export type useStylesType = <StylesT>(
  callbackStyle: (
    colors: TThemeColors,
    fonts: typeof R.fonts,
    isDark: boolean,
  ) => StylesT,
) => StylesT

export const useStyles: useStylesType = callbackStyle => {
  const { colors, dark } = useTheme();

  return callbackStyle(colors as unknown as TThemeColors, R.fonts, dark);
};
