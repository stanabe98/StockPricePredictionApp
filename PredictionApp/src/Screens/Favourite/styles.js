import { StyleSheet } from "react-native";
import Constants from 'expo-constants';



const styles3 =  StyleSheet.create({
    
        container: {
          flex: 1,
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight,
          backgroundColor: '#ecf0f1',
          padding: 8,
        },
        paragraph: {
          margin: 24,
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        },




        container: {
          flex: 1,
          backgroundColor: '#121212',
          // alignItems: 'center',
          paddingTop: 50,
          // justifyContent: 'center',
        },
        
        title: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom:3
      
        },
      
        text: {
          color:'white',
          marginRight: 5,
          paddingRight:1,
          alignItems:'center'
        },
      
        stockContainer: {
          flexDirection:'row',
          borderBottomWidth: 0.2,
          borderBottomColor:'grey',
          padding:15,
          justifyContent:'space-between',
          backgroundColor: 'darkslategrey',
          borderRadius:8
        },
      
        rank: {
          fontWeight:'bold',
          color: 'white',   
         
        },
      
        rankContainer:{
          backgroundColor: 'black',
          paddingHorizontal:6,
          borderRadius:8,
          marginRight:5,
          justifyContent:'center'
        }
      }

)



export default styles3