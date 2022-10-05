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
        fontSize:17,
        fontWeight:'600', 
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

    filtersContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#282828',
        paddingVertical:5

    }
    
   

});

export default styles;