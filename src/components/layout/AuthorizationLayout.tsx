import React, { PropsWithChildren } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { ms } from 'react-native-size-matters/extend'

interface Props extends PropsWithChildren {}

export const AuthorizationLayout: React.FC<Props> = props => {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        keyboardDismissMode={'on-drag'}
        contentContainerStyle={{
          paddingHorizontal: ms(16),
          paddingTop: ms(16),
        }}>
        {React.Children.count(props.children) > 1
          ? //@ts-ignore
            props.children[0]
          : props.children}
      </ScrollView>
      {React.Children.count(props.children) > 1
        ? //@ts-ignore
          props.children[1]
        : undefined}
    </SafeAreaView>
  )
}
