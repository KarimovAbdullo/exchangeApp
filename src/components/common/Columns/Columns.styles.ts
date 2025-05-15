import { createStyles } from 'utils/createStyles'

export default createStyles(() => ({
  columns: {
    flexDirection: 'row',
  },
  flex: { flex: 1 },
  wrap: { flexWrap: 'wrap' },
  fullWidth: { width: '100%' },
  column_container: {
    flexDirection: 'column',
  },
}))
