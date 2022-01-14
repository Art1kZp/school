import React from "react";
import { Button, Text, View } from 'react-native';

function CarScreen({navigation}) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Something text</Text>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} /> 
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} /> 
      </View> 
    );
  }
  export default CarScreen; 