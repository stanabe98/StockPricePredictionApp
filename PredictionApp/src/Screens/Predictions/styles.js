import { StyleSheet } from "react-native";

const styles= StyleSheet.create({

    CurrentPrice: {
    color: 'white', 
    fontSize: 30,
    fontWeight:"600",
    letterSpacing:1,

    },
    
    input: {
        flex:1,
        height:40,
        color:'white',
        fontSize: 10,
        borderWidth:0.5,
        borderColor: 'white',
        padding:4,
        margin:3,
        borderRadius:5
    },
    PredictButton:{
        backgroundColor: 'darkcyan',
        alignItems: "center",
        padding:10,
        // marginVertical:30,
        // marginHorizontal:70,
        borderRadius:5,
        flexDirection: 'row',
        flex:1,
        marginHorizontal:45,
        justifyContent: 'center',

    },
    PredictText:{
        color:'white',
        fontSize:15,
        // fontWeight:'600', 
        textAlign:'center'
    },

    deletePredictionText:{
        color:'white',
        fontSize:15,
        fontWeight:'300', 
        textAlign:'center'
    },

    PredictdeleteButton:{
        backgroundColor: 'crimson',
        alignItems: "center",
        padding:5,
        // marginVertical:30,
        // marginHorizontal:70,
        borderRadius:5,
        flexDirection: 'row',
        flex:1,
        marginHorizontal:150,
        justifyContent: 'center',

    },
    stockContainer: {
        flexDirection:'row',
   
        padding:6,
        justifyContent:'center',
        backgroundColor: 'darkslategrey',
        borderRadius:3,
        marginHorizontal:10

      },

    Container2: {
        marginVertical:50,

        padding:6,
        justifyContent:'center',
        backgroundColor: 'darkslategrey',
        borderRadius:3,
        marginHorizontal:10

      },
    
    
   

});

export default styles;