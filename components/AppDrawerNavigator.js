import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import SettingScreen from '../Screens/SettingScreen'
export const AppDrawerNavigator=createDrawerNavigator({
    home:{
        screen:AppTabNavigator
    },
Setting:{
    screen:SettingScreen
},

},
{createComponent:CustomSideBarMenu},
{initialRouteName:'home'}
)