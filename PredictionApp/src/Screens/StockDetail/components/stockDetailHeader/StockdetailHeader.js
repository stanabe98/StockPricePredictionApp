import React from "react";
import {View, Text, Image} from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { stockImages } from "../../../../components/StockItem/stockdict.js"
import styles from "./styles.js"
import {useNavigation} from "@react-navigation/native"
import {useRoute} from "@react-navigation/native";



const StockDetailHeader= () => {
    const navigation= useNavigation()  
    const route = useRoute();
    const {params: {stockID, imageID}} = route;
    return(
        <View style={styles.headerContainer}>
            <Ionicons name="chevron-back-sharp" size={32} color="white" onPress={() => navigation.goBack()}/>
            <View style= {styles.tickerContainer}>
                <Image source={{uri: imageID}} style= {{width:30, height:30}}/>
                <Text style={styles.tickertext}> {stockID}</Text>
            </View>
            <EvilIcons name="user" size={30} color="white" />
        </View>
    );
};


export default StockDetailHeader;