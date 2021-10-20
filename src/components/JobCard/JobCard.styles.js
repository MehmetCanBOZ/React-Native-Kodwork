import { StyleSheet} from 'react-native'

export default StyleSheet.create({
  container:{
   marginHorizontal:5,
   marginVertical:7,
   padding: 5,
   borderColor:'#c6c6c3',
   borderWidth:1,
   backgroundColor:'white',
   borderRadius:5,
  },
  name:{
    fontWeight:'bold',
    fontSize:17,
  },
  company:{
    fontSize:15,
    marginBottom:2,
  },
  location:{
    borderRadius:10,
    flex: 1,
    backgroundColor: '#f44336',
    color:'white',
    fontSize: 14,
    fontWeight: 'bold',
    maxWidth:200,
    padding: 2,
    paddingLeft:5,
    overflow:'hidden'
  },
  level:{
    textAlign:'right',
    color:'#f44336',
    fontWeight:'bold'
  }
})


