import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import { RateState } from './types';
import { getAllRates, getCurrentRate } from './actions';
import { Currency, CurrencyRatesResponse } from 'types/data';

export const initialStateUser: RateState = {
 loading:false,
 fromData: null,
 toData: null,
 ratesData:null,
 localRatesData:null,
 isConnected:false,
};

const rateSlice = createSlice({
  name: 'rate',
  initialState: initialStateUser,
  reducers: {
    setFromCurrency(state, action: PayloadAction<Currency | null>) {
      state.fromData = action.payload;
    },
    setToCurrency(state, action: PayloadAction<Currency>) {
      state.toData = action.payload;
    },
    clearRates(state) {
      state.ratesData = null;
    },
    checkNetConnection(state, action: PayloadAction<boolean>) {
      state.isConnected = action.payload;
    },
    swapFromToData(state) {
      const temp = state.fromData;
      state.fromData = state.toData;
      state.toData = temp;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCurrentRate.pending, state => {
        state.ratesData = null;
        state.loading = true;
      })
      .addCase(getCurrentRate.fulfilled, (state,action: PayloadAction<CurrencyRatesResponse>) => {
        state.loading = false;
        state.ratesData = action.payload;

      })
      .addCase(getCurrentRate.rejected, (state) => {
        state.loading = false;
      });
      //get all rates for local calcute items
      builder
      .addCase(getAllRates.pending, state => {
        state.loading = true;

      })
      .addCase(getAllRates.fulfilled, (state,action: PayloadAction<CurrencyRatesResponse>) => {
        state.localRatesData = action.payload;
        state.loading = false;


      })
      .addCase(getAllRates.rejected, (state) => {
        state.loading = false;

      });

  },
});

const persistConfig: PersistConfig<RateState> = {
  key: 'localRatesData,',
  storage: AsyncStorage,
  whitelist: ['localRatesData'],
};

export const rateReducer = persistReducer(persistConfig, rateSlice.reducer);
export const rateActions = rateSlice.actions;


