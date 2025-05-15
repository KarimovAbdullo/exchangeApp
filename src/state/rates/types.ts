import { Currency, CurrencyRatesResponse } from 'types/data';

export type RateState = {
 loading:boolean,
 fromData: Currency | null;
 toData: Currency | null;
 ratesData:CurrencyRatesResponse | null
 localRatesData:CurrencyRatesResponse | null
 isConnected:boolean
}
