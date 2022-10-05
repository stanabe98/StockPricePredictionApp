import React, {useEffect, useState} from "react";
import { View,Text , Pressable} from "react-native";

import { SwipeListView } from 'react-native-swipe-list-view'


import { FavItem } from "./components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { initSavedStocks } from "../../services/requests";

const WatchlistScreen = () => {
    const [listData, setListData] = useState([]);

    const getData= async()=>{
        const currentval=await AsyncStorage.getItem("@stocks_saved")
        const jsonVal=JSON.parse(currentval)
        setListData(jsonVal)     
    }
    const onDeleteAsset = async (asset) => {
      const currentstocks= await AsyncStorage.getItem("@stocks_saved")
      const jsonVal=JSON.parse(currentstocks)
      const filtered= jsonVal.filter((i)=>i.ticker!==asset.item.ticker)
      
      const removed=JSON.stringify(filtered)
      await AsyncStorage.setItem("@stocks_saved", removed)
    };
    
    useEffect(()=> {
        initSavedStocks()
        getData();
       
    },[listData])

    const renderDeleteButton = (data) => {
        return (
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#EA3943",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingRight: 30,
              marginLeft: 20,
              borderRadius:10
            }}
            onPress={() => onDeleteAsset(data)}
          >
            <FontAwesome name="trash-o" size={24} color="white" />
          </Pressable>
        );
      };

    const renderItem= ({ item }) => <FavItem market={item} />;

    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{  color: "white", fontSize: 25, letterSpacing: 1, paddingHorizontal: 20, paddingBottom: 5 }}>Edit Watchlist</Text>
                <Text style={{color: 'lightgrey', fontSize: 12, paddingHorizontal: 10}}>swipe to delete</Text>
            </View>
            <SwipeListView
            data={listData}
            contentContainerStyle={{ paddingBottom: 50 }}
            renderItem= {renderItem}
            rightOpenValue={-75}
            disableRightSwipe
            closeOnRowPress
            renderHiddenItem= {(data)=> renderDeleteButton(data)}
            ItemSeparatorComponent={() => <View style={{height: 10}} />}   
            />
        </View>
    )

};

export default WatchlistScreen;