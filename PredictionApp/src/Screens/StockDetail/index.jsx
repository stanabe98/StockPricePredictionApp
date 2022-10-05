
import {View, Text, Dimensions, ActivityIndicator,PanResponder, Pressable, Alert} from 'react-native';

import styles from "./styles"
import StockDetailHeader from "./components/stockDetailHeader/StockdetailHeader.js";
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Rect, Text as SvgText, Svg, Circle, Defs, G,Line, LinearGradient, Path,Stop } from "react-native-svg";
import React, { useState, useEffect , useRef} from 'react';
import { TextInput } from 'react-native-gesture-handler';
import {useRoute} from "@react-navigation/native";
import {getDetailMarketData, getChartData, initPredStocks} from "../../services/requests";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FilterComponent from  './components/FilterComponent'

const StockDetailScreen = () =>{

    const [coin, setCoin]= useState(null);
    const [delpred, setdelpred]= useState()
    const [coinMarketData, setCoinMarketData]= useState(null);
    const conversionrate= 300;
    const route = useRoute();
    const {params: {stockID}} = route;
    const navigation = useNavigation();

    const [loading, setLoading]= useState(true);
    const [stockValue, setStockValue]= useState("1");
    const [USDvalue, setUSDvalue]= useState(conversionrate.toString());


    const [selectedRange, setSelectedRange]=useState("365");

   

    const fetchStockData = async() => {
        setLoading(true);
        const fetchedData = await getDetailMarketData(stockID);
        const fetchCoinMarketData=await getChartData(stockID, 365);
        
        setCoin(fetchedData);
        setCoinMarketData(fetchCoinMarketData);

        size.current= (fetchCoinMarketData.array2).length   //changes useRef value
   
        setUSDvalue(fetchedData[0].price.toFixed(2).toString())
        setLoading(false);
    }

    const CheckPrediction= async()=>{
      const pred_saved=await AsyncStorage.getItem("@predictions_saved")
      if(pred_saved==null){
        await AsyncStorage.setItem("@predictions_saved", '{}')
        setdelpred(false)
      }else{
      const pred_json=JSON.parse(pred_saved)
       setdelpred(pred_json[stockID]!=null)
      }
    }


    const deletePrediction= async() => {
      const pred_saved=await AsyncStorage.getItem("@predictions_saved")
      const pred_json=JSON.parse(pred_saved)
      delete pred_json[stockID]
      const pred_str= JSON.stringify(pred_json)
      await AsyncStorage.setItem("@predictions_saved", pred_str)
      Alert.alert('Deleted','previous predictions of '+ stockID +' was deleted')
      console.log(pred_str)
      setdelpred(false)
  }


    const DeleteOption=()=>{
      if(delpred==true){
          return(
            <View style={{flexDirection: 'row', marginVertical:10}}>
            <Pressable style={styles.PredictdeleteButton} onPress={() =>
            Alert.alert('Long press','long press to delete previous predictions')}  
            onLongPress={() => deletePrediction()}>
              <Text style={styles.deletePredictionText}>Delete </Text> 
            </Pressable>
          </View >
            )
      }
      else{
        return(<View>
          </View>
        )
      }
      }
   
    useEffect(() => {
        
         fetchStockData()
         CheckPrediction()
        
    },[])

    const apx = (size = 0) => {
        let width = Dimensions.get('window').width;
        return (width / 750) * size;
    };
    const size = useRef(null);
    const [positionX, setPositionX] = useState(-1);

    const updatePosition = (x) => {
        const YAxisWidth = apx(130);
        const x0 = apx(0);
        const chartWidth = apx(750) - YAxisWidth - x0;
        const xNew = x0 + chartWidth;
        const xDistance = chartWidth / size.current;
   


        if (x <= x0) {
            x = x0;
        }
        if (x >= xNew) {
            x = xNew;
        }
        let value = ((x - x0) / xDistance).toFixed(0);
        if (value >= size.current - 1) {
            value = size.current - 1; 
        }
     
    setPositionX(Number(value));
    };


   const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderRelease: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX)

      },
    })
   );

    
    if (loading || !coin || !coinMarketData ){
        return <ActivityIndicator size="large" />
        
    }
   

    const [ {
        price
      } ] =coin;

    const {array1, array2}= coinMarketData;


    
    const priceList= array2
    const dateList= array1


    const filterData=(arr1, arr2)=>{

    }



    const changeStockValue = (value) => {
        setStockValue(value);
        const floatValue= parseFloat(value.replace(',','')) || 0;
        setUSDvalue((floatValue*price).toString())
        // setPriceList(array2)
        // console.log(priceList)

    };

    const changeUSDValue= (value) => {
        setUSDvalue(value)
        const floatValue= parseFloat(value.replace(',','')) || 0;
        setStockValue((floatValue/price).toString())

    };

    const onSelectedRangeChange= async(selectedRangeValue)=>{
      setPositionX(-1)
      setSelectedRange(selectedRangeValue);
      const newfetchrange= await getChartData(stockID, selectedRangeValue)
      setCoinMarketData(newfetchrange)
      size.current= (newfetchrange.array2).length  
 

    }


    const CustomLine = ({ line }) => (
        <Path
          key="line"
          d={line}
          stroke="#20b2aa"
          strokeWidth={apx(4)}
          fill="none"
        />
      );
    


    //toolTip return

    const Tooltip = ({ x, y, ticks }) => {
        if (positionX < 0) {
          return null;
        }
        const date = dateList[positionX];
        return (
          <G x={x(positionX)} key="tooltip">
            <G x={x}>
              <Line
                y1={0}
                y2={apx(570)}
                stroke="black"
                strokeWidth={apx(2)}
                strokeDasharray={[6, 3]}
              />
              <Circle
                cy={y(priceList[positionX])}
                r={apx(20 / 3)}
                stroke="#fff"
                strokeWidth={apx(2)}
                fill="darkslategrey"
              />
            </G>
          </G>
        );
      };

    const verticalContentInset = { top: apx(40), bottom: apx(40) };


  
    return (

        <View style={{paddingHorizontal:10}}>
            <StockDetailHeader/>
            <View style={{justifyContent:'center',paddingHorizontal:20, paddingTop:5}}>
                <Text style= {styles.CurrentPrice}>Current Price:{price.toFixed(2)}</Text>
            </View>
            <View style={{paddingVertical:13}}>
                {/* <Text style= {styles.CurrentPrice}>{tooltipPos.value}</Text> */}
            </View>
            <View style={styles.filtersContainer}>
              <FilterComponent filterDay= "10" filterText="7d"   selectedRange={selectedRange}  setSelectedRange={onSelectedRangeChange} />
              <FilterComponent filterDay= "30" filterText="30d"   selectedRange={selectedRange}  setSelectedRange={onSelectedRangeChange}/>
              <FilterComponent filterDay= "365" filterText="1yr"  selectedRange={selectedRange}  setSelectedRange={onSelectedRangeChange}/>
            </View>

        <View
      style={{

        backgroundColor: 'lightgray',
        alignItems: 'stretch',
        width: apx(740),
        height: apx(570),
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: apx(740),
          height: apx(570),
          alignSelf: 'stretch',
          // paddingRight:20
        }}>
        <View style={{ flex: 1 }} {...panResponder.current.panHandlers}>
          <AreaChart
            style={{ flex: 1 }}
            data={priceList}
            // curve={shape.curveNatural}
            curve={shape.curveMonotoneX}
            contentInset={{ ...verticalContentInset }}
            svg={{ fill: '#add8e6' }}>
            <CustomLine />
          
    
            <Tooltip />
          </AreaChart>
          

        </View>
      </View>     
      
    </View>
            
        <View style={{flexDirection: 'row', justifyContent:'center'}}>
          <Text style={{color: 'white', alignSelf:'center', fontSize:17}}>
            ${priceList[positionX]}   on  {dateList[positionX]}
          </Text>
        </View>
                
        <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', flex:1}}>
                <Text style={{color: 'white', alignSelf:'center'}}>Stock</Text>
                <TextInput style={styles.input} value={stockValue} keyboardType="numeric" onChangeText={changeStockValue}/>


            </View>

            <View style={{flexDirection: 'row', flex:1}}>
                <Text style={{color: 'white', alignSelf:'center'}}>USD</Text>
                <TextInput style={styles.input} value={USDvalue} keyboardType="numeric" onChangeText={changeUSDValue}/>

            </View>

        </View >


        <View style={{flexDirection: 'row', marginVertical:30}}>
           

            <Pressable style={styles.PredictButton} onPress={() => navigation.navigate("PredictScreen", {stockID})}  >
              <Text style={styles.PredictText}>Make Prediction</Text>
                
            </Pressable>

        </View >
    <DeleteOption/>
       
        </View>
        

    )
}

export default StockDetailScreen;





    //useeffect to refresh api call
    
    // useEffect(() => {
  
        
    //     timerInterval = setInterval(async () => {
    //         // setLoading(true);
    //         const fetchedData = await getDetailMarketData(stockID);
    //         // setUSDvalue(fetchedData[0].price.toFixed(2).toString());
    //         setCoin(fetchedData);
    //         // setLoading(false);
            
          
    //     }, 5000);
  

    // () => { clearInterval(timeInterval) } 
  
    // }, [coin])
    
//    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })