import React, {useState, useEffect} from "react";
import { View,Text , Image} from "react-native";

// import {stockLists} from '../../components/StockItem/stockdict'
// import styles from "../../components/StockItem/styles";
// import styles3 from "./styles";
import { stockLists } from "../../../components/StockItem/stockdict";
import styles from "../../../components/StockItem/styles"
import styles3 from "./styles";



export const FavItem= ({market})=> {
    const {ticker, image}= market;
    return(
        <View style={styles3.stockContainer}>
            <Image 
            source={{
                uri:image
            }}
            style={{
                height:30, width:30,
                marginRight:10,
                alignSelf: 'center',
            }}  
            />
            <Text style={styles.title}>{stockLists[ticker]}</Text>
            <View style={styles3.rankContainer}>
                <Text style={styles3.text} > {ticker} </Text>
            </View>
        </View>
    )
}