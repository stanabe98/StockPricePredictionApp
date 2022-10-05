
import React, { useState, useEffect , Suspense} from "react";
import {View, Text, Pressable, Image, KeyboardAvoidingView} from "react-native";
import SearchableDropdown from 'react-native-searchable-dropdown'
import styles from "./styles";
import { availableStock2 } from "../../components/StockItem/stockdict";
import { useNavigation } from "@react-navigation/native";


import AsyncStorage from "@react-native-async-storage/async-storage";

import { initSavedStocks } from "../../services/requests";

const SearchScreen= ()=> {

    const [selectedStockName, setSelectedStockName]= useState(null);
    const [availableadd, setavailableadd]= useState([]);

    const navigation = useNavigation();

    const Decide=()=>{
        if(availableadd.includes(getTicker())){
            return(
                <View style={{marginVertical:70, marginRight:25}} > 
                    <View style={{justifyContent:'center'}}>
                    <Text style={styles.addstockButtonText}>Stock already added to Watchlist </Text>
                    </View>
                    <View style={{justifyContent:'center'}}>
                    <Text style={styles.addstockButtonText}>Please select another </Text>
                    </View>
                </View>               
            )
        }
        else{
            return(
                <View style={{flexDirection: 'row', marginVertical:40}}>
                <Pressable style={styles.cancelButton}
                    onPress={() => navigation.navigate("Add Stock")}>
                <Text style={styles.addstockButtonText}>Cancel</Text>

                </Pressable>
                <Pressable style={styles.addstockButton}
                    onPress={() => addStocktoList()}>
                <Text style={styles.addstockButtonText}>Add Stock</Text>

                </Pressable>
                </View>)
            }
    }

   

    const compare = (a,b) =>{
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    const addStocktoList= async()=> {
        const newStock={
            ticker: getTicker(),
            image: getImage()
        };
        const count= await AsyncStorage.getItem("@stocks_saved")
        const count2= JSON.parse(count)
        count2.push(newStock)
        const arranged=count2.sort(function(a,b){
            return compare(a.ticker,b.ticker)
        })
        const jsonValue2=JSON.stringify(arranged)
        await AsyncStorage.setItem("@stocks_saved", jsonValue2);
        navigation.navigate("Add Stock")
    }

  

    const getTicker=()=> {
        const ticker = (availableStock2.filter(({name})=>name==selectedStockName))[0]['ticker']
        return ticker
    }

    const getImage=()=> {
        const image = (availableStock2.filter(({name})=>name==selectedStockName))[0]['image']
        return image
    }
    
    const CheckStocks= async()=>{
        const pred_saved=await AsyncStorage.getItem("@stocks_saved")
        const pred_json=JSON.parse(pred_saved)
        const arr=[]
        for(var i=0; i<pred_json.length; i++){
            arr.push(pred_json[i]['ticker'])
        }
        setavailableadd(arr) 
    }




    useEffect(()=> {
        initSavedStocks()
        CheckStocks()

    },[])  

 
    return(
        <KeyboardAvoidingView style={{flex:1}} keyboardVerticalOffset={80}   >
            <SearchableDropdown
                items={availableStock2}    
                onItemSelect= {(item)=>setSelectedStockName( item.name)}
                containerStyle={styles.dropdownContainer}
                itemStyle={styles.item}
                itemTextStyle={{color: 'white'}}   
                resetValue= {false}
                placeholder= {selectedStockName ||"select stock..."}
          
                placeholderTextColor="white"
                textInputProps={{
                    underlineColorAndroid: "transparent",
                    style:{
                        padding:12, borderWidth: 1.5,
                        borderColor: "#444444", borderRadius: 5,
                        backgroundColor: '#1e1e1e',
                        color: 'white'        
                    }
                }}
            />
            {selectedStockName &&  (
                <>
                <View style={{flex:1}}>
                <View style={styles.infoDisplay}>
                    <Image source={{
                    uri:getImage()
                    }}
                    style={styles.imageDisplay}
                    />
                    <Text style={styles.infoText}>{selectedStockName} {getTicker()}</Text>
                </View>
            </View>
            <Decide/>

                </>
            )}
      
        </KeyboardAvoidingView>
   
    )

};


export default SearchScreen; 