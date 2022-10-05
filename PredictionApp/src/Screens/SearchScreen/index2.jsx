
import React from "react";

import {View, StyleSheet,Text,Pressable} from "react-native";

import { Feather} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddNewStock = ()=> {
    const navigation = useNavigation();
    return(
        <View>
        <Pressable style={styles2.container}
        onPress={() => navigation.navigate("AddNewStockScreen")}
        >
            
            <View style={styles2.searchBar__unclicked}>
                <Feather
                    name="search"
                    size={20}
                    color="green"
                style={{ marginLeft: 1 }}
                />
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles2.buttonText}>  Add new Stock</Text>
                </View>
            </View>

        </Pressable>
        <View style={{paddingBottom:40}}>

        </View>
    
        </View>
   
    )
}

export default AddNewStock


const styles2 = StyleSheet.create({
    container: {
      marginLeft: 35,
    //   marginHorizontal:10,

      alignItems: "center",
      flexDirection: "row",
      width: "90%",
      
    },
    searchBar__unclicked: {
      padding: 10,

      flexDirection: "row",
      width: "90%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
      marginVertical:50

    },
 
    buttonContainer: {
        backgroundColor: 'darkcyan',
        alignItems: "center",
        padding:10,
        marginVertical:25,
        marginHorizontal:20,
        borderRadius:5,
        flexDirection: 'row'

    },

    buttonText:{
        color:'grey',
        fontSize:17,
        fontWeight:'600', 
    }
  });