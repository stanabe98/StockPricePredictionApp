import React from "react";
import { StyleSheet } from "react-native";


const styles= StyleSheet.create({

    dropdownContainer: {
        width: "100%",
        paddingHorizontal:10,
        paddingVertical:2,
        paddingBottom: 60
    },

    item: {
        padding: 10,
        marginTop:2,
        backgroundColor: '#008b8b',
        borderWidth:1,
        borderColor:'#444444',
        borderRadius: 5
    }, 

    ticker: {
        color:'grey',
        fontWeight:"100",
        fontSize:20,
        marginTop:25,
        marginLeft:5


    },


    searcBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    addstockButton:{
        backgroundColor: 'darkcyan',
        alignItems: "center",
        padding:10,
        // marginVertical:30,
        // marginHorizontal:70,
        borderRadius:5,
        flexDirection: 'row',
         flex:1,
        marginRight:10
    },
    cancelButton:{
        backgroundColor: 'crimson',
        // alignItems: "center",
        padding:10,
        // marginVertical:30,
        // marginHorizontal:70,
        borderRadius:5,
        flexDirection: 'row',
         flex:1,
        marginLeft:10
    },

    
    addstockButtonText:{
        color:'white',
        fontSize:17,
        fontWeight:'600', 
        alignSelf:'center',
        marginLeft:45
      
    },

    infoDisplay:{
        
        alignItems: "center",
        padding:10,
        marginVertical:90,
        marginHorizontal:70,
        borderRadius:5
    }, 

    imageDisplay:{
        height:70,
        width:70,
        marginRight:10,
        alignSelf: 'center',
    },

    infoText:{
    
        color:'white',
        fontSize:20,
        fontWeight:'600', 
        
    }


    
});
 
export default styles; 