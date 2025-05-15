import CustomText from 'components/common/CustomText'
import { Space } from 'components/common/Space'
import React, { memo } from 'react'
import { View } from 'react-native'

interface Props {
  readonly title?: string
  readonly subtitle?: string
}

export const AuthorizationHeader: React.FC<Props> = memo(props => {
  return (
    <View>
      {!!props.title && <CustomText children={props.title} size={30} bold />}

      <Space height={props.subtitle ? 25 : 0} />

      {!!props.subtitle && (
        <CustomText children={props.subtitle} color="graySecondaryText" />
      )}
    </View>
  )
})
