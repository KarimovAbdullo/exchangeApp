import R from 'res';

export type TNavigationParams = {
  [R.routes.HOME_SCREEN]:
    | undefined

    | { type?: string;}

  [R.routes.SCREEN_SELECT]:  { type?: string;}
}
