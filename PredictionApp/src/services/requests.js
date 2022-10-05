import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, SafeAreaView,Image, ActivityIndicator, Pressable , Dimensions} from 'react-native';
import styles from "../components/StockItem/styles";



const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const initSavedStocks= async()=>{
  const current= await AsyncStorage.getItem("@stocks_saved")
  if(current==null){
    await AsyncStorage.setItem("@stocks_saved",'[]')
  }
}

export const initPredStocks= async()=>{
  const current= await AsyncStorage.getItem("@predictions_saved")
  if(current==null){
    await AsyncStorage.setItem("@predictions_saved",'{}')
  }
}



export const getDetailMarketData = async( stockID) =>{
    try{
       const response= await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/${stockID}?apikey=0bcc504296972a2429ad290f7f521da3`)

       return response.data

    }catch (e){
       
    }
}


export const getCurrentPrice = async(stockID) =>{
  try{
     const response= await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/${stockID}?apikey=0bcc504296972a2429ad290f7f521da3`)
     return response.data
  }catch (e){
      console.log(e);
  }
}





export const getChartData= async(stockID, num) =>{

    var today =  (new Date()).toISOString().split('T')[0]
    var yearAgo= new Date()
    yearAgo.setDate(yearAgo.getDate() - parseInt(num))
    var yearAgo2=yearAgo.toISOString().split('T')[0]

    try{
        const response= await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${stockID}?from=${yearAgo2}&to=${today}&apikey=0bcc504296972a2429ad290f7f521da3`)
        
        var data= response.data['historical']
        var size= data.length;
        var x=[];
        var y=[];

        for (var i=0; i<size;i++){
            x.push(data[i]['date'])
            y.push(parseFloat(data[i]['close']))
        }

        return {
            array1: x.reverse(),
            array2: y.reverse(),
        };

    }
    catch{
    }
}


export const getDetailMarketData2 = async( stockID) =>{
    
    const url= `https://financialmodelingprep.com/api/v3/quote-short/${stockID}?apikey=0bcc504296972a2429ad290f7f521da3`
    let res = await fetch(url);
    let data = await res.json();
    return  data

}








export const getDetailMarketDatafull = async( stockID) =>{
    
    const url= `https://financialmodelingprep.com/api/v3/quote/${stockID}?apikey=0bcc504296972a2429ad290f7f521da3`
    let res = await fetch(url);
    let data = await res.json();
    return  data

}


export const useStockDetails = (stockID) => {
    const [stockDetails, setStockDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      (async () => {
        try {
          setStockDetails(await getDetailMarketDatafull(stockID));
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      })();
    }, []);
  
    return {
      loading,
      stockDetails,
      error,
    };
  };


  export function scaleSize(fontSize) {
    const window = Dimensions.get("window");
    return Math.round((fontSize / 375) * Math.min(window.width, window.height));
  }

  export const fetchchart = async( stockID,num) =>{
    var today =  (new Date()).toISOString().split('T')[0]
    var yearAgo= new Date()
    yearAgo.setDate(yearAgo.getDate() - parseInt(num))
    var yearAgo2=yearAgo.toISOString().split('T')[0]
    console.log(yearAgo2)
    console.log(today)
    console.log(stockID)


    const url2= `https://financialmodelingprep.com/api/v3/historical-price-full/${stockID}?from=${yearAgo2}&to=${today}&apikey=0bcc504296972a2429ad290f7f521da3`

    try{
      let response = await fetch(url2);
      let json = await response.json();
      let historical=json['historical']
      var size= historical.length
      

    
      return  size

    }
    catch (error){
      console.log(error)

    }
    
    

}
  













