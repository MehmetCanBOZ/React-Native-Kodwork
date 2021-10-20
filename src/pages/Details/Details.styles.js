
   
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  header: {
    width: '100%',
    minHeight: 100,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:3,
  },
  bodyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  locationsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f44336',
    marginBottom:3,
  },
  locationText: {
    color: 'black',
  },
  LevelTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f44336',
    marginBottom:3,
  },
  LevelText: {
    color: 'black',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth:1,
    borderColor:'#c6c6c3',
    marginHorizontal:1,
    marginVertical:5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    backgroundColor: '#eeeeee',
    marginTop:5,
    marginBottom:20,
  },
  p: {
    color: 'black',
    fontSize: 17,
  },
  button: {
    backgroundColor: '#f44336',
    minWidth: 175,
    height: 40,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    marginHorizontal: 5,
  },
  buttonDisabled :{
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingRight: 5,
  },
});