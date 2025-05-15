import { RouteProp, useRoute } from '@react-navigation/native'
import { TNavigationParams } from 'types/navigation'

const useSmartRoute = <T extends keyof TNavigationParams>() => {
  const route = useRoute<RouteProp<TNavigationParams, T>>()

  return route
}

export default useSmartRoute
