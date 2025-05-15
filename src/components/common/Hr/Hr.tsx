import CustomText from 'components/common/CustomText'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ColorValue, View } from 'react-native'
import { TThemeColors } from 'res/theme'

import stylesConfig from './Hr.styles'

interface IProps {
  text?: string | string[]
  textColor?: keyof TThemeColors
  style?: object
  space?: number
  topSpace?: number
  bottomSpace?: number
  color?: ColorValue
}

const Hr = ({
  style,
  textColor,
  text,
  topSpace,
  bottomSpace,
  space,
  color,
}: IProps) => {
  const styles = useStyles(stylesConfig)

  return text ? (
    <View
      style={[
        styles.hrWithText,
        {
          marginTop: topSpace,
          marginBottom: bottomSpace,
          marginVertical: space,
        },
        color ? { backgroundColor: color } : {},
        style,
      ]}>
      <View style={[styles.hr, styles.hrText]} />
      <CustomText size={14} style={styles.text} color={textColor}>
        {text}
      </CustomText>
      <View style={[styles.hr, styles.hrText]} />
    </View>
  ) : (
    <View
      style={[
        styles.hr,
        {
          marginTop: topSpace,
          marginBottom: bottomSpace,
          marginVertical: space,
        },
        color ? { backgroundColor: color } : {},
        style,
      ]}
    />
  )
}

export default Hr
