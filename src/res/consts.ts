import { Dimensions, Platform } from 'react-native';
export const TEST = '';


export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = !IS_ANDROID;

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const COOLDOWN_TIME = 60000;

export const ALL_CURRENCIES =
    'AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BWP, BYN, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNY, COP, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GGP, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IMP, IQD, IRR, ISK, JEP, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, MAD, MDL, XAG, XAU, XCD, XDR, XOF, XPF, YER, ZAR, ZMK, ZMW, ZWL, XPT, XPD, BTC, ETH, BNB, XRP, SOL, DOT, AVAX, MATIC, LTC, ADA, USDT, USDC, DAI, BUSD, ARB, OP, AED, BTN, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, VEF, VND, VUV, WST, XAF, EGP, INR, LYD, MGA, MYR, SBD, UZS';
