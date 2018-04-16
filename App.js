//import library
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//creat a component
const Header = () =>{
  const {container, box, headerbox, circle, circlebox} = styles;
  return(
    
    <View style={container}>
      
      <Text style={[headerbox, {backgroundColor: 'black'}]}>FAB Example</Text>
      <Text style={[box, {backgroundColor: '#77DDFF', flex: 3}]}></Text>
      
      <Text style={[box, {backgroundColor: '#FFBB00', flex: 5 }]}></Text>
      <View style={circle}>
        <Text style={[circlebox, {alignItems: 'flex-end'}]}>+</Text>
      </View>
    </View>
    
    
  );
};

//export
export default Header;

//styling component
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'gray',
    flex: 1,
  },
  headerbox: {
    backgroundColor: 'black',
    color: 'white',
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    height: 70,
    width: 375,

  },
  box: {
    flex: 1,
    backgroundColor: 'yellow',
    color: 'white',
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  circle: {
    //position
    position: 'absolute',
    top: 250,
    right: 20,
    //style
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    //shadow -----> android 效果好像出不來
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0,
      
    }
  },
  circlebox: {
    color: 'white',
    fontSize: 30,
    fontWeight: '100',
  }
  
});
