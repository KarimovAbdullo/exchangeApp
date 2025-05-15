import {  createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'api/instance';
import R from 'res';
import { CurrencyRatesResponse } from 'types/data';

interface GetRatesParams  {
  base?: string;
  amount:string,
  currencies:string,
  onSuccess?: (data: CurrencyRatesResponse) => void;
  onError?: (error: any) => void;
}

export const getCurrentRate = createAsyncThunk<
CurrencyRatesResponse,
  GetRatesParams
>(
  'getCurrentRate/get',
  async ({ base,amount,currencies, onSuccess, onError }, thunkAPI) => {
    try {
      const response = await apiClient.get<CurrencyRatesResponse>(
        R.urls.API_RATES,
        {
          params: {
            amount:amount,
            base:base,
            currencies:currencies,
          },
        }
      );

      onSuccess?.(response.data);
      return response.data;
    } catch (error: any) {
      const err = error.response?.data || error.message;
      onError?.(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getAllRates = createAsyncThunk<
CurrencyRatesResponse,
  GetRatesParams
>(
  'allRates/get',
  async ({ amount,currencies, onSuccess, onError }, thunkAPI) => {
    try {
      const response = await apiClient.get<CurrencyRatesResponse>(
        R.urls.API_RATES,
        {
          params: {
            amount:amount,
            base:'USD',
            currencies:currencies,
          },
        }
      );

      onSuccess?.(response.data);
      return response.data;
    } catch (error: any) {
      const err = error.response?.data || error.message;
      onError?.(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
