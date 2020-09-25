import *as React from 'react'

import HomeScreen from './screen/HomeScreen'
import DetailScreen from './screen/DetailScreen'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
 
const Stack = createStackNavigator();




const App =()=>{

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title:'My Home',
          headerTintColor:'#00ffff',
          headerStyle:{
          backgroundColor:'#000fff',
          }
        }}
        />
        <Stack.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={{
          title:'My Home',
          headerTintColor:'#00ffff',
          headerStyle:{
          backgroundColor:'#000fff',
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}
export default App