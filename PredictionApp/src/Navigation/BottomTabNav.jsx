import React  ,{Suspense}from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { Dimensions, Platform } from 'react-native';


import WatchlistScreen from '../Screens/Favourite';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AddNewStock from '../Screens/SearchScreen/index2';


const Tab = createBottomTabNavigator();

const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator 
            initialRouteName='Home'   
            screenOptions={{headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'darkslategrey',
            tabBarStyle:{backgroundColor: 'black', height: Platform.OS === 'ios' ? 75 : 45

            }
        }}>
            <Tab.Screen name={"Home"} component={HomeScreen} options={{
                tabBarIcon:({focused, color})=> (<FontAwesome name="home" 
                size={focused ? 29:26} color= {color} />)}}
            />     
             <Tab.Screen name={"Add Stock"} component={AddNewStock} options={{
                tabBarIcon:({focused, color})=> (<FontAwesome name="search-plus"
                 size={focused ? 29:26} color={color} />)}}
            />
            <Tab.Screen name={"Watchlist"} component={WatchlistScreen} options={{
                tabBarIcon:({focused, color})=> (<AntDesign name="edit"
                 size={focused ? 29:26} color={color} />)}}
            />
        </Tab.Navigator>    
    )
};

export default BottomTabNavigator;