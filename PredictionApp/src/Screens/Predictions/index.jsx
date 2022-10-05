import {View, Text, Dimensions, ActivityIndicator, FlatList} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from "./styles"
import axios from "axios";
import React, { useState, useEffect , useRef} from 'react';
import { initPredStocks } from '../../services/requests';
import {useRoute} from "@react-navigation/native";


import AsyncStorage from "@react-native-async-storage/async-storage";



const PredictScreen=()=> {
    
    const [listData, setListData] = useState(null);
    const [graphPrices, setGraphPrices]=useState([])
    const [loading, setLoading]= useState(false);

    const route = useRoute();
    const {params: {stockID}} = route;

    const saved= async()=>{
        setLoading(true)
        
        const check_val= await AsyncStorage.getItem("@predictions_saved")
        const check_json= JSON.parse(check_val)
        setListData(check_json[stockID])
        if (check_json[stockID]== null){
            console.log('nope')
            callModel(stockID)
        }
        else{
        const pricedata=[]
        for (var i=0;i<7;i++){
          
            pricedata.push( parseFloat(check_json[stockID][i]["price"]))  
        }
        setGraphPrices(pricedata)
        setLoading(false)
        }
        
    }
  // const response= await axios.get('https://mocki.io/v1/4201bb53-c96c-4256-92ac-a648b1c0ee15')
    const callModel= async (ticker)=>{
        try{    
            const response= await axios.get(`http://192.168.1.143:8050/${ticker}`)
            console.log('calling model')

            var data= response.data
            var size= data.length
            var d = new Date();
            const list2=[]
            const graphlist=[]
        
            for (let i =0 ; i<size;i++){
                d.setDate(d.getDate() + 1);
                var fl=parseFloat(data[i].toFixed(2))
                graphlist.push(fl)
                var obj={id: d.toDateString(), price: fl}
                list2.push(obj)
        
            }
            setListData(list2)
            setGraphPrices(graphlist)

            const newStock={
                [stockID]: list2};
            
            const von=await AsyncStorage.getItem("@predictions_saved")
            const vob3= JSON.parse(von)
            const objnew= Object.assign(vob3, newStock)
            const JSONvalue= JSON.stringify(objnew)
            await AsyncStorage.setItem("@predictions_saved", JSONvalue)
            setLoading(false)    
        }
    catch (error){
        console.log(console.error())
        }
    }
    
    
    useEffect(()=>{
        initPredStocks()
        
        saved()
        
     
    },[])


    const renderList = ({ item }) => {

        return(
            <View style={styles.stockContainer}>
                <Text style={styles.PredictText}>{item.id}     predicted...    $ {item.price}</Text>

            </View>
            
        );
    };


    const var34=graphPrices
    const graphPred = useRef([23,4,56,6]);


    if (loading || !listData ){
        return (
            
        <View >
        <ActivityIndicator size="large" />
        <View style={styles.Container2}>
            <Text style={styles.PredictText}>Model is training and predicting...</Text>
            <Text style={styles.PredictText}>Please be patient...</Text>
        </View>
        
        </View>
        
        ) 
    }
   
    return(
        <View >
           <FlatList data={listData} renderItem= {renderList}/>
           <View>
                 
        <View>
       
        <LineChart
            data={{
            datasets: [{
                data:graphPrices
                
            }]
            }}
            width={Dimensions.get('window').width} // from react-native
            height={320}
            chartConfig={{
            backgroundColor: 'blue',
            backgroundGradientFrom: 'blue',
            backgroundGradientTo: 'cyan',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            }
            }}
            line
            style={{
            marginVertical: 10,
            borderRadius: 16
            }}
                    />
            </View>





        </View>
        </View>
        
    )


}



export default PredictScreen; 