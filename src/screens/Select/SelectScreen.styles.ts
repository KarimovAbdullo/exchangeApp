import { createStyles } from 'utils/createStyles';

export default createStyles(colors => ({
  constainer: {
    backgroundColor: colors.grayBackground,
    paddingHorizontal:'16@s',
    flex:1,
  },

  input:{
  marginLeft:'5@s',
  width:'100%',
  height:'20@vs',
 },
 inputCart:{
  borderWidth:1,
  backgroundColor:'white',
  paddingHorizontal:'16@s',
  paddingVertical:'12@vs',
  borderRadius:'8@s',
  marginBottom:'16@vs',
 },
 cart:{
  padding:16,
  flexDirection:'row',
  alignItems:'center',
  backgroundColor: 'rgba(222, 222, 222, 0.5)',
  justifyContent:'space-between',
 },
img:{
  width:'30@s',
  height:'20@s',
  borderWidth:1,
  marginRight:'10@s',
},
circle:{
  borderWidth:1,
  width:'15@s',
  height:'15@s',
  borderRadius:'50@s',
  justifyContent:'center',
  alignItems:'center',
},
dot:{
backgroundColor:colors.black,
width:'8@s',
height:'8@vs',
borderRadius:'50@s',
},
text:{
  width:'80%',
},
itemContainer:{
  borderRadius:'8@s',

},
}));
