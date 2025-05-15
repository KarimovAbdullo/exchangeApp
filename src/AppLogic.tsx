import React, {ReactElement, ReactNode, useEffect} from 'react';

import NetInfo from '@react-native-community/netinfo';
import {useAppDispatch} from 'hooks/redux';
import {rateActions} from 'state/rates/slice';

interface IAppLogic {
  children: ReactNode | ReactElement;
}

const AppLogic = (props: IAppLogic) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    let modalTimeout: any;
    const unsubscribe = NetInfo.addEventListener(state => {
      clearTimeout(modalTimeout);
      modalTimeout = setTimeout(() => {
        if (!state.isConnected) {
          dispatch(rateActions.checkNetConnection(false));
          dispatch(rateActions.clearRates());
          dispatch(rateActions.setFromCurrency(null));
        } else {
          dispatch(rateActions.checkNetConnection(true));
        }
      }, 500);
    });

    return () => {
      unsubscribe();
      clearTimeout(modalTimeout);
    };
  }, [dispatch]);
  return <>{props.children}</>;
};

export default AppLogic;
