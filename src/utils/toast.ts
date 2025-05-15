import Toast from 'react-native-toast-message'

export const showToast = (body: string, title?: string) => {
  Toast.show({
    type: 'default',
    props: {
      title,
      body,
    },
  })
}
