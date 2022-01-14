import React from "react";
import { Image, Button, View } from 'react-native';

function PictureScreen({navigation}) {
    return (
        <View 
        style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image 
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={{width: 200, height: 200, marginBottom: 20}} 
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />  
        <Button title="Check car picture" onPress={() => navigation.navigate('Car')} />
      </View> 
    );
  }

  export default PictureScreen; 