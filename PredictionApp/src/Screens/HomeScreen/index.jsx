import React, { useEffect, useState } from "react";
import styles from "../../components/StockItem/styles";
import { FlatList , View, Text,RefreshControl,} from 'react-native';
import StockItem from "../../components/StockItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initSavedStocks , getCurrentPrice} from "../../services/requests"


const HomeScreen = () => {
    
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pricestate, setpricestate]= useState({"CVX":23,"MRK":34})

    const renderItem= ({ item }) => {
      return(
        <View style={{flexDirection:'row'}}>
    <StockItem market={item}  />
    <View style={styles.PriceContainer}>
      <View style={{marginTop:10}}>
    <Text style={{color:'white'}}>Current Price: </Text>
    <Text style={styles.title}> $ {(pricestate[item.ticker])}</Text>
    
    </View>
    </View>
    </View>)};


    function delay() {
      return new Promise(resolve => setTimeout(resolve, 2));
    }
 

    const getPrice= async(ticker) =>{
      await delay()
      const fetchedData2= await getCurrentPrice(ticker);
      const fetchedData= fetchedData2[0]['price']
      return(fetchedData)
    }

    async function processArray(array) {
      var x=[];
      var y=[];
      for(var i=0 ; i<array.length; i++){
        
        var tick= array[i]['ticker']
        var p1= await getPrice(tick)
        x.push(tick)
        y.push(p1.toFixed(2))
      }
      var pricedict ={}; 
      x.forEach((key, i) => pricedict[key] = y[i]);
      setpricestate(pricedict)
    }
    

    const fetchStocks= async ()=>{
        setLoading(true)
        const currentval=await AsyncStorage.getItem("@stocks_saved")
        if(currentval==null){
          await AsyncStorage.setItem("@stocks_saved",'[]')
          setStocks([])
          setLoading(false)
        }else{
        const jsonVal=JSON.parse(currentval)
        processArray(jsonVal)
        setStocks(jsonVal)
        setLoading(false)
      }
    }
    const refetchStocks= async()=>{
        initSavedStocks()
        if (loading) {
            return;
          }

        const currentval=await AsyncStorage.getItem("@stocks_saved")
        const jsonVal=JSON.parse(currentval)
        processArray(jsonVal)
        
        setLoading(true);
        setStocks(jsonVal)
        setLoading(false); 
    }

    useEffect(() => {
          initSavedStocks()
          fetchStocks();
      }, []);

    return (
        <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{  color: "white", fontSize: 25, letterSpacing: 1, paddingHorizontal: 20, paddingBottom: 5 }}>SELECTED STOCKS</Text>
        <Text style={{color: 'lightgrey', fontSize: 12, paddingHorizontal: 10}}>FinancialModeling API</Text>
      </View>
        <FlatList
            data={stocks}
            contentContainerStyle={{ paddingBottom: 55 }}
            renderItem= {renderItem}
            ItemSeparatorComponent={() => <View style={{height: 5}} />}
            onEndReached={() => refetchStocks()}
            refreshControl={
                <RefreshControl
                  refreshing={loading}
                  tintColor="white"
                  onRefresh={refetchStocks}
                />
              }
        />
        <View>
            
        </View>
     
        </View>
             
    ); 
  
};

export default HomeScreen





