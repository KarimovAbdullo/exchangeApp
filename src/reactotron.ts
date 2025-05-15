import AsyncStorage from '@react-native-async-storage/async-storage'
import { TurboModuleRegistry } from 'react-native'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

let config: { name: string; host?: string } = {
  name: 'mobile',
}

if (__DEV__) {
  const SourceCode = TurboModuleRegistry.getEnforcing('SourceCode')
  // @ts-ignore
  const scriptURL = SourceCode?.getConstants()?.scriptURL

  if (scriptURL) {
    config.host = scriptURL.split('://')[1].split(':')[0]
  }
}

// @ts-ignore
// eslint-disable-next-line no-console
console.log = Reactotron.log
// @ts-ignore
console.warn = Reactotron.logImportant
// @ts-ignore
console.error = Reactotron.logImportant

// @ts-ignore
const reactotron = Reactotron.configure(config)
  .useReactNative()
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .connect()

export default reactotron
