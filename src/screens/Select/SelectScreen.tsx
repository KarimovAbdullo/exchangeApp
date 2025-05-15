import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {useColors} from 'hooks/useColors';
import {useStyles} from 'hooks/useStyles';
import React, {useMemo, useState} from 'react';

import stylesConfig from './SelectScreen.styles';
import Columns from 'components/common/Columns';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import R from 'res';
import currencyData from '../../api/currencies.json';
import {rateActions} from 'state/rates/slice';
import {Currency} from 'types/data';
import useSmartRoute from 'hooks/useSmartRoute';
import {rateSelector} from 'state/rates/selectors';
import useSmartNavigation from 'hooks/useSmartNavigation';

const SelectScreen = () => {
  const route = useSmartRoute<typeof R.routes.SCREEN_SELECT>();
  const {type} = route.params;
  const styles = useStyles(stylesConfig);
  const dispatch = useAppDispatch();
  const colors = useColors();
  const [search, setSearch] = useState('');
  const {fromData, toData} = useAppSelector(rateSelector);
  const navigation = useSmartNavigation();

  const selectItem = (item: Currency) => {
    if (type === 'from') {
      dispatch(rateActions.setFromCurrency(item));
    } else {
      dispatch(rateActions.setToCurrency(item));
    }
    navigation.goBack();
  };

  const filteredData = useMemo(() => {
    if (!search.trim()) {
      return currencyData;
    }

    const lower = search.toLowerCase();

    return [...currencyData]
      .filter(
        item =>
          item.code.toLowerCase().includes(lower) ||
          item.name.toLowerCase().includes(lower),
      )
      .sort((a, b) => {
        const aCode = a.code.toLowerCase();
        const bCode = b.code.toLowerCase();

        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        const lowerSearch = lower;

        const aStarts =
          aCode.startsWith(lowerSearch) || aName.startsWith(lowerSearch);
        const bStarts =
          bCode.startsWith(lowerSearch) || bName.startsWith(lowerSearch);

        if (aStarts && !bStarts) {
          return -1;
        }
        if (!aStarts && bStarts) {
          return 1;
        }
        return 0;
      });
  }, [search]);
  console.log('______', filteredData);

  return (
    <SafeAreaView style={styles.constainer}>
      <Columns style={styles.inputCart}>
        <R.icons.SearchIcon />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search currency"
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
        />
      </Columns>

      <FlatList
        style={styles.itemContainer}
        data={filteredData}
        keyExtractor={item => item.code}
        renderItem={({item}) => {
          const isSelected =
            (type === 'from' ? fromData?.code : toData?.code) === item.code;
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.cart,
                {
                  backgroundColor: isSelected ? colors.select : colors.unSelect,
                },
              ]}
              onPress={() => selectItem(item)}>
              <Columns>
                <Image source={{uri: item.flagSrc}} style={styles.img} />
                <View style={styles.text}>
                  <Text ellipsizeMode="tail" numberOfLines={1}>
                    {item.code} - {item.name}
                  </Text>
                </View>
              </Columns>

              <View style={styles.circle}>
                {isSelected ? <View style={styles.dot} /> : null}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SelectScreen;
