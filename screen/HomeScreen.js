import *as React from 'react'
import {View,Text, Button} from 'react-native'
const HomeScreen =({navigation})=>{
  return(
   <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
     <Text>H</Text>
     <Button title='go to ...' onPress ={()=>navigation.navigate('Detail') }/>
   </View> 
  )
}
export default HomeScreen