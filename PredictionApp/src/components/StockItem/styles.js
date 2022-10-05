import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
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


    textticker: {
      color:'white',
      alignItems:'center'
    },




  
    stockContainer: {
      flexDirection:'row',
      // borderBottomWidth: 0.2,
      borderBottomColor:'white',
      padding:15,
      justifyContent:'space-between',
      backgroundColor: 'darkslategray',
 
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
     
      flex:1,
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
    },

    PriceContainer: {
      flexDirection:'row',
      // borderBottomWidth: 0.2,
      borderBottomColor:'white',
      
      justifyContent:'space-between',
      backgroundColor: 'darkslategray',
      // borderRadius:8, 
      flex:0.5,
      
     
      
    },
  
  });

  export default styles;
  