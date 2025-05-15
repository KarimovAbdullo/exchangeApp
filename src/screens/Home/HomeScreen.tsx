import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {useStyles} from 'hooks/useStyles';
import React, {useEffect, useRef, useState} from 'react';

import stylesConfig from './HomeScreen.styles';
import Columns from 'components/common/Columns';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import R from 'res';
import {getAllRates, getCurrentRate} from 'state/rates/actions';
import useSmartNavigation from 'hooks/useSmartNavigation';
import {rateSelector} from 'state/rates/selectors';
import {Space} from 'components/common/Space';
import useDebounce from 'hooks/useDebounce';
import {useColors} from 'hooks/useColors';
import {ErrorResponse} from 'types/data';
import {rateActions} from 'state/rates/slice';
import {ALL_CURRENCIES} from 'res/consts';

const HomeScreen = () => {
  const styles = useStyles(stylesConfig);
  const dispatch = useAppDispatch();
  const navigation = useSmartNavigation();
  const colors = useColors();
  const {fromData, toData, ratesData, loading, isConnected, localRatesData} =
    useAppSelector(rateSelector);
  const inputRef = useRef<TextInput>(null);

  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);
  const [errorMessage, setErrorMessage] = useState<ErrorResponse | null>(null);

  const currencyCode = toData?.code;
  const currencyRate = localRatesData?.rates?.[currencyCode || ''];

  const onFromSelect = () => {
    navigation.navigate(R.routes.SCREEN_SELECT, {type: 'from'});
    setValue('');
  };

  const onToSelect = () => {
    navigation.navigate(R.routes.SCREEN_SELECT, {type: 'to'});
    setValue('');
  };

  const onChangeValue = (text: string) => {
    setValue(text);
    if (text === '') {
      dispatch(rateActions.clearRates());
    }
  };

  useEffect(() => {
    if (!localRatesData) {
      dispatch(
        getAllRates({
          currencies: ALL_CURRENCIES,
          amount: '1',
        }),
      );
    }
  }, [dispatch, localRatesData]);

  useEffect(() => {
    setErrorMessage(null);
    inputRef.current?.focus();
    if (fromData && toData && debouncedValue) {
      dispatch(
        getCurrentRate({
          base: fromData.code,
          currencies: toData.code,
          amount: debouncedValue,
          onSuccess: data => {
            console.log('Rates fetched successfully', data);
          },
          onError: err => {
            setErrorMessage(err);
          },
        }),
      );
    }
  }, [dispatch, fromData, toData, debouncedValue, isConnected]);

  return (
    <SafeAreaView style={styles.constainer}>
      <View>
        <Columns justify="space-between" fullWidth align="center">
          <TouchableOpacity
            disabled={!isConnected}
            onPress={onFromSelect}
            style={[styles.cart, !isConnected && styles.opacty]}>
            <Text>From</Text>
            <Columns align="center" justify="center" style={styles.selectCart}>
              <Columns align="center" justify="center">
                {fromData ? (
                  <Image
                    source={{uri: fromData?.flagSrc || ''}}
                    style={styles.img}
                    resizeMode="stretch"
                  />
                ) : null}

                {!isConnected ? (
                  <Image
                    source={require('assets/images/us.png')}
                    style={styles.img}
                    resizeMode="stretch"
                  />
                ) : null}

                <Text>{isConnected ? fromData?.code : 'USD'}</Text>
              </Columns>

              <R.icons.DownArrowtIcon />
            </Columns>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={!isConnected}
            onPress={() => dispatch(rateActions.swapFromToData())}
            style={[styles.converIcon, !isConnected && styles.opacty]}>
            <R.icons.RightLeftIcon />
          </TouchableOpacity>

          <TouchableOpacity onPress={onToSelect} style={styles.cart}>
            <Text>To</Text>
            <Columns align="center" justify="center" style={styles.selectCart}>
              <Columns align="center" justify="center">
                {toData ? (
                  <Image
                    source={{uri: toData?.flagSrc || ''}}
                    style={styles.img}
                    resizeMode="stretch"
                  />
                ) : null}
                <Text>{toData?.code || ''}</Text>
              </Columns>

              <R.icons.DownArrowtIcon />
            </Columns>
          </TouchableOpacity>
        </Columns>

        <View style={styles.amountCart}>
          <TextInput
            value={value}
            onChangeText={onChangeValue}
            style={styles.input}
            autoFocus={true}
            ref={inputRef}
          />

          {fromData && !errorMessage?.error.message ? (
            <Columns>
              <Text>{value || 1}</Text>
              <Text> {`${fromData?.symbolNative} `} </Text>
              <Text>=</Text>
            </Columns>
          ) : null}

          {!isConnected ? (
            <Columns>
              <Text>{value || 1} </Text>
              <Text>USD </Text>
              <Text> =</Text>
            </Columns>
          ) : null}

          <Space height={4} />

          {toData && value && isConnected ? (
            <Text style={styles.price}>
              {ratesData?.rates?.[toData?.code || '']?.toFixed(2)}{' '}
              {ratesData ? Object.keys(ratesData.rates)[0] : ''}
            </Text>
          ) : (
            <>
              {!isConnected ? (
                <Text style={styles.price}>
                  {(parseFloat(value || '1') * (currencyRate || 0)).toFixed(4)}{' '}
                  {currencyCode}
                </Text>
              ) : null}
            </>
          )}
        </View>
      </View>
      {loading && <ActivityIndicator size="large" style={styles.loading} />}
      {errorMessage && isConnected && (
        <Text style={{color: colors.error}}>{errorMessage.error.message}</Text>
      )}

      {!isConnected && (
        <Text style={{color: colors.error}}>
          You're offline. Using locally stored data for calculations.
        </Text>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
