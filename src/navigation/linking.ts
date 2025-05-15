import { LinkingOptions } from '@react-navigation/native'
import { Linking } from 'react-native'
import R from 'res'
import { APP_SCHEME, WEB_URL } from 'res/consts'
import { TNavigationParams } from 'types/navigation'

const prefixes = [APP_SCHEME, WEB_URL]

const linking: LinkingOptions<TNavigationParams> = {
  prefixes,
  config: {
    initialRouteName: R.routes.SCREEN_LOGIN,
    screens: {},
  },
  async getInitialURL() {
    const url = await Linking.getInitialURL()

    return url
  },
  // subscribe(listener) {
  //   const onReceiveURL = async ({ url }: { url: string }) => {
  //     listener?.(url)
  //   }
  //   const subscribeLinking = Linking.addEventListener('url', onReceiveURL)
  //
  //   return () => {
  //     subscribeLinking.remove()
  //   }
  // },
}

export default linking
