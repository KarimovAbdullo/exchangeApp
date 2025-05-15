import { CommonActions } from '@react-navigation/native'
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack'
import { Platform } from 'react-native'
import { s, vs } from 'react-native-size-matters/extend'
import R from 'res'
import { TThemeColors } from 'res/theme'
import { TNavigationParams } from 'types/navigation'

export const getDefaultScreenOptions = (
  colors: TThemeColors,
  route: string,
): StackNavigationOptions => ({
  headerTitleStyle: {
    color: colors.black,
    fontFamily: R.fonts.GTFEkstraTRIAL.bold,
    fontSize: s(17),
  },
  headerStyle: {
    backgroundColor:
      route === R.routes.SCREEN_PROFILE ? colors.grayBackground : colors.white,
    elevation: 0,
    shadowOpacity: 0,
    height: Platform.select({ android: vs(65) }),
  },
  headerTintColor: colors.primaryText,
  headerRightContainerStyle: {
    paddingRight: s(10),
  },
  headerBackTitle: ' ',
  headerMode: 'screen',
})

export const getFastTransitionParams = (): StackNavigationOptions => ({
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 200,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 100,
      },
    },
  },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.5, 0.9, 1],
      }),
    },
  }),
})

export const multiReplace = (
  navigation: StackNavigationProp<TNavigationParams, keyof TNavigationParams>,
  replaceCount: number,
  newRoutes: [{ name: string }],
) => {
  navigation.dispatch(state => {
    const routes = state.routes.slice(0, replaceCount + 1)
    return CommonActions.reset({
      ...state,
      index: routes.length + newRoutes.length - 1,
      routes: [...routes, ...newRoutes],
    })
  })
}

export const multiReplaceWithFind = (
  navigation: StackNavigationProp<TNavigationParams, keyof TNavigationParams>,
  findRouteName: string,
  newRoutes: { name: string; params?: object }[],
) => {
  navigation.dispatch(state => {
    const replaceIndex = state.routes.findIndex(i => i.name === findRouteName)

    const routes = state.routes.slice(0, replaceIndex + 1)
    return CommonActions.reset({
      ...state,
      index: routes.length + newRoutes.length - 1,
      routes: [...routes, ...newRoutes],
    })
  })
}
