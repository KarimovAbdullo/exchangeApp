import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  hr: {
    width: '100%',
    height: '1@vs',
    backgroundColor: colors.grayBackground,
  },
  hrText: {
    flex: 1,
  },
  hrWithText: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: '20@s',
  },
}))
