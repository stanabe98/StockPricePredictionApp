import React,{useState, useEffect} from "react";
import {  Text, View, Image, Pressable } from 'react-native';
import styles from "./styles";
import { stockLists } from "./stockdict.js"
import {useNavigation} from "@react-navigation/native";
    

const StockItem= ({market})=> {

    const {ticker, image}= market;
    const navigation = useNavigation(); 
    return(
    <Pressable style={styles.stockContainer} 
        onPress={()=> navigation.navigate("StockDetailScreen", {stockID:ticker, imageID:image })}>
    <Image 
    source={{
        uri:image
    }}
    style={{
        height:30,
        width:30,
        marginRight:10,
        alignSelf: 'center',
    }}  
    />
    <View>
    <Text style={styles.title}>{stockLists[ticker]}</Text>
    <View style={{flexDirection: 'row'}}>
        <View style={styles.rankContainer}>
        <Text style={styles.textticker} > {ticker} </Text>
        </View>

    </View>
    </View>

    <View style={{marginLeft:'auto'}}>
    
    </View>
    
</Pressable> 
   
    );
}




export  default StockItem;
