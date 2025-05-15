import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import linking from 'navigation/linking.ts';
import ROUTES_SCREENS from 'navigation/screens';
import React from 'react';
import {Platform} from 'react-native';
import {vs} from 'react-native-size-matters/extend';
import R from 'res';
import {TTheme} from 'res/theme';
import {TNavigationParams} from 'types/navigation';
import {
  getDefaultScreenOptions,
  getFastTransitionParams,
} from 'utils/navigation.ts';

const Navigator = ({theme}: {theme: TTheme}) => {
  const RootStack = createStackNavigator<TNavigationParams>();
  const navigationRef = useNavigationContainerRef<TNavigationParams>();

  const buildStackScreens = () => {
    return ROUTES_SCREENS.map((route, index) => {
      return (
        <RootStack.Screen
          key={index.toString()}
          component={route.component}
          name={route.name}
          options={{
            title: route.title,
            headerShown: !route.hideHeader,
            headerTitleAlign: 'left',
            gestureEnabled: !route.blockSwipe,
            // headerTitle: () => <Text>dsads</Text>,
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //     <R.icons.ArrowLeft />
            //   </TouchableOpacity>
            // ),
            ...getDefaultScreenOptions(theme.colors, route.name),
            ...(route.fastTransition ? getFastTransitionParams() : {}),
            headerStyle: {
              backgroundColor: route.headerStyle,
              elevation: 0,
              shadowOpacity: 0,
              height: Platform.select({android: vs(65)}),
            },
          }}
        />
      );
    });
  };

  return (
    <NavigationContainer theme={theme} ref={navigationRef} linking={linking}>
      <RootStack.Navigator
        initialRouteName={R.routes.HOME_SCREEN}
        screenOptions={{headerShown: false}}>
        <>
          {/*<RootStack.Screen name={R.routes.ROOT_MAIN} component={Tabs} />*/}
          {buildStackScreens()}
        </>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
