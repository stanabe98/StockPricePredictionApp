import { StyleSheet } from "react-native";

const styles= StyleSheet.create({

    headerContainer: {
        flexDirection: "row", 
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: 'space-between',

    },
    
    tickerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    tickertext: {color:'white',
     fontWeight:'bold',
      marginHorizontal:5, 
      fontSize:17 },


});

export default styles;