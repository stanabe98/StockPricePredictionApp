import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React ,{Suspense} from 'react';




import {NavigationContainer} from '@react-navigation/native'


import Navigation from './src/Navigation';
import { RecoilRoot } from 'recoil';


export default function App() {

  
  
  return (
    <NavigationContainer theme={{
      colors:{
        background: '#121212'
      }
    }}>
      <Suspense fallback={<Text>Loading pls wait</Text>}>
      <RecoilRoot>

      <View style={styles.container}>

        <Navigation/>
        {/* <HomeScreen/> */}
        {/* <StockDetailScreen2 /> */}
        <StatusBar style="light"/>
      </View>
      </RecoilRoot>
      </Suspense>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
 
    paddingTop: 50,
  
  },
});