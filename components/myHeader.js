import React from 'react';
import {Header, Icon} from 'react-native-elements';
import {View, Text, Stylesheet} from 'react-native';
const MyHeader=props=>{
    return(
        <Header
        leftComponent={<Icon name='bars' type='font-awesome' color='#707070' onPress={()=>{props.navigation.toggleDrawer()}}></Icon>}
        centerComponent={{text:props.title, style:{color:'white', fontSize:20, fontWeight:'bold'}}}
        backgroundColor='orange'
        />
    )
} 
 export default MyHeader;