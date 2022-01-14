import React from "react";
import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./sources/HomeScreen";
import DetailsScreen from "./sources/DetailsScreen";
import CreatePostScreen from "./sources/CreatePostScreen";
import PictureScreen from "./sources/PictureScreen";
import CarScreen from "./sources/CarScreen"
import SettingScreen from "./sources/SettingScreen";

// headerTitle: (props) => <LogoTitle {...props} />  --- add to something stack.screen optionns

// function add image

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={{uri: 'https://reactjs.org/logo-og.png'}}
//     />
//   );
// }

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTitleStyle: {
            fontWeight: '500'
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerTitle
            headerLeft: () => (
              <Button
                onPress={() => console.log('Info Button')}
                title="Info"
                color="black"
              />)
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          initialParams={{itemId: 40}}
        />
        <Stack.Screen 
          name="CreatePost" 
          component={CreatePostScreen}
        />
        <Stack.Screen 
          name="Picture" 
          component={PictureScreen}
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen 
          name="Car"
          component={CarScreen}
        />
        <Stack.Screen 
          name="Setting"
          component={SettingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

  

