import React from 'react'
import { ActivityIndicator, ColorValue, StyleSheet, View } from 'react-native'

interface Iprops {
  color?: ColorValue
  size?: number | 'small' | 'large' | undefined
}

const Loading = ({ color = '#293B85', size }: Iprops) => (
  <View style={styles.container}>
    <ActivityIndicator color={color} size={size} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export { Loading }
