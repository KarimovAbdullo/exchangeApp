import { DefaultTheme } from '@react-navigation/native';

const theme = {
  light: {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering
      background: '#FFFFFF',
      graySecondaryText: 'rgba(42, 52, 72, 0.45)',
      grayBackground: '#F5F6F9',
      blue: '#293B85',
      white: '#FFFFFF',
      black: '#1B1726',
      textPrimary: '#304497',
      textSecondary: '#2A344873',
      primaryText: '#1B1726',
      error: 'red',
      lightYellow: '#B6AC61',
      green: '#66975C',
      golden: '#C3A55D',
      darkText: '#FFFFFF73',
      darkBlueBackground: 'rgba(48, 68, 151, 0.3)',
      thirdyBackground: '#F7F7F7',
      select:'rgba(222, 222, 222, 1)',
      unSelect:'rgba(222, 222, 222, 0.5)',
    },
    fonts: {
      ...DefaultTheme.fonts,
    },
  },
  dark: {
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering
      background: '#FFFFFF',
      graySecondaryText: 'rgba(42, 52, 72, 0.45)',
      grayBackground: '#F5F6F9',
      blue: '#293B85',
      white: '#FFFFFF',
      black: '#1B1726',
      textPrimary: '#304497',
      textSecondary: '#2A344873',
      primaryText: '#1B1726',
      error: 'red',
      lightYellow: '#B6AC61',
      green: '#66975C',
      golden: '#C3A55D',
      darkText: '#FFFFFF73',
      darkBlueBackground: 'rgba(48, 68, 151, 0.5)',
      thirdyBackground: '#F7F7F7',
       select:'rgba(222, 222, 222, 1)',
      unSelect:'rgba(222, 222, 222, 0.5)',
    },
    fonts: {
      ...DefaultTheme.fonts,
    },
  },
};

export type TTheme = typeof theme.light & typeof theme.dark
export type TThemeColors = typeof theme.light.colors & typeof theme.dark.colors

export default theme;
