import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import Login from '../screens/Login';


const Stack = createStackNavigator();

export default function TransationsStack() {

    return( 
        <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen}  options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="Login" component={Login}  options={{
            title:false,
          headerShown:true,
          headerStyle: {
              backgroundColor:'#BA0C2F'
          },
          headerTintColor:'#fff'
        }}/>
       {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    );
}