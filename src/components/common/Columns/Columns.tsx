import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { View } from 'react-native'

import stylesConfig from './Columns.styles'

interface IProps {
  children: ReactNode
  flex?: boolean
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline'
  justify?:
    | 'space-between'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
  wrap?: boolean
  style?: object
  fullWidth?: boolean
  columnContainer?: boolean
  columns?: boolean
}

export const Columns = (props: IProps) => {
  const {
    children,
    align,
    justify,
    flex,
    wrap,
    style,
    fullWidth,
    columnContainer,
    columns,
  } = props
  const styles = useStyles(stylesConfig)

  return (
    <View
      style={[
        styles.columns,
        flex && styles.flex,
        wrap && styles.wrap,
        align && { alignItems: align },
        justify && { justifyContent: justify },
        fullWidth && styles.fullWidth,
        columnContainer && styles.column_container,
        columns && styles.columns,
        style,
      ]}>
      {children}
    </View>
  )
}
