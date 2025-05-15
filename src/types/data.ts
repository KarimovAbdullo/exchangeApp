
export interface RatesResponse {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: string;
  rates: Record<string, number>;
}

export interface Currency {
  name: string;
  symbol: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
  countryCodeISO2: string;
  flagSrc: string;
}

export interface CurrencyRatesResponse {
  success: boolean;
  terms: string;
  privacy: string;
  timestamp: number;
  date: string;
  base: string;
  rates: {
    [currencyCode: string]: number;
  };
}

export interface ErrorResponse {
  request_id: string;
  success: false;
  billed: boolean;
  billed_units: number;
  error: {
    code: string;
    status: number;
    message: string;
    description: string;
    link: string;
    docs_link: string | null;
    support_email: string;
  };
}


