import { createStyles } from 'utils/createStyles';

export default createStyles(colors => ({
  constainer: {
    backgroundColor: colors.grayBackground,
    paddingHorizontal:'16@s',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  cart:{
    flexDirection:'column',
  },
  opacty:{
    opacity:0.5,
  },
  selectCart:{
    marginTop:'8@vs',
    width:'139.5@s',
    borderRadius:'8@s',
    paddingHorizontal:'16@s',
    paddingVertical:'12@vs',
    backgroundColor:'rgba(222, 222, 222, 1)',
    alignItems:'center',
    justifyContent:'space-between',
  },
  converIcon:{
    marginTop:'25@vs',
  },
  img:{
    width:'30@s',
  height:'20@s',
  marginRight:5,
  borderWidth:1,
  },
  amountCart:{
    paddingTop:'16@vs',

  },
  input:{
    borderWidth:1,
    marginTop:'8@vs',
    height:'43@vs',
    borderRadius:'8@s',
    paddingHorizontal:'16@s',
    marginBottom:'24@vs',
    backgroundColor:colors.white,
  },
  disabledInput:{
    borderWidth:1,
    marginTop:'8@vs',
    height:'43@vs',
    borderRadius:'8@s',
    paddingHorizontal:'16@s',
    marginBottom:'24@vs',
  },
  price:{
    fontSize:42,
  },
  loading:{
    position: 'absolute',
    paddingTop: 30,
  },

}));
