import *as React from 'react'
import {View,Text, Button} from 'react-native'

const DetailScreen=({navigation})=>{
    return(
      <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
       <Text>D</Text>
       <Button title='go to ...'  onPress ={()=>navigation.navigate('Home') } />
     </View> 
    )
  }
  export default DetailScreen