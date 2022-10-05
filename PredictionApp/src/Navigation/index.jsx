import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import StockDetailScreen from "../Screens/StockDetail";
import BottomTabNavigator from "./BottomTabNav";
import SearchScreen from "../Screens/SearchScreen";
import PredictScreen from "../Screens/Predictions";


const Stack= createNativeStackNavigator();


const Navigation = () => {

    return(
        <Stack.Navigator
            initialRouteName="Root"
            // screenOptions={{headerShown: false}}
        >
            <Stack.Screen  name={"Root"} component= {BottomTabNavigator} options={{headerShown:false}}/>
            <Stack.Screen  name={"StockDetailScreen"} component= {StockDetailScreen} options={{headerShown:false}}/>

            <Stack.Screen  name={"AddNewStockScreen"} component= {SearchScreen} options={{
                title: "Add stock to train",
                headerStyle:{
                backgroundColor: '#121212'
            },
            headerTintColor: 'white',
            headerTitleStyle:{
            fontWeight:'bold',
            }
            }}
            
            />
            <Stack.Screen  name={"PredictScreen"} component= {PredictScreen}  options={{
                title: "Predictions based on LSTM",
                headerStyle:{
                backgroundColor: '#121212'
            },
            headerTintColor: 'white',
            headerTitleStyle:{
            fontWeight:'bold',
            }
            }}
            
            />


        </Stack.Navigator>
    )
}

export default Navigation;