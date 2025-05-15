import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Reactotron from 'reactotron';
import { persistStore } from 'redux-persist';
import { rateReducer } from './rates/slice';

const combinedReducer = combineReducers({
  rates:rateReducer,
});


const setupStore = () => {
  return configureStore({
    reducer: combinedReducer,
    enhancers: getDefaultEnhancers => {
      const reactotronEnhancer = __DEV__ ? [Reactotron.createEnhancer!()] : [];
      return getDefaultEnhancers().concat(reactotronEnhancer);
    },
  });
};

const store = setupStore();

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof combinedReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
