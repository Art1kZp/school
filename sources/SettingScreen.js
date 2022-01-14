import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import Info from './Info';
import Help from './Help';


const Tab = createBottomTabNavigator();

function SettingScreen() {
    return (
    <Tab.Navigator>
        <Tab.Screen 
        name="Feed" 
        component={Feed}
        options={{ tabBarBadge: function(){
            
        } }}/>
        <Tab.Screen name="Info" component={Info}/>
        <Tab.Screen name="Help" component={Help}/>
    </Tab.Navigator>
    );
  }

  export default SettingScreen;