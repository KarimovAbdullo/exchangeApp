import R from 'res';
import HomeScreen from 'screens/Home';
import SelectScreen from 'screens/Select/SelectScreen';
import {TNavigationParams} from 'types/navigation';

type SCREEN_TYPE = Record<string, any> & {
  name: keyof TNavigationParams;
  title?: string;
  hideHeader?: boolean;
  blockSwipe?: boolean;
  headerStyle?: string;
  isLogin?: boolean;
};

const ROUTES_SCREENS: SCREEN_TYPE[] = [
  {
    name: R.routes.HOME_SCREEN,
    component: HomeScreen,
    title: '',
    isLogin: true,
    hideHeader: true,
  },
  {
    name: R.routes.SCREEN_SELECT,
    component: SelectScreen,
    title: 'Currency Select',
    isLogin: true,
  },
];

export default ROUTES_SCREENS;
