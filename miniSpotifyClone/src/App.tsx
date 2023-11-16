/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { setupPlayer, addTrack } from "../musicPlayerServices"
function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  async function setup() {
    let isSetup = await setupPlayer();
    if(isSetup){
      await addTrack();
    }
    setIsPlayerReady(isSetup);
  }
  useEffect(() => {
    setup()
  },[])

  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView>
      <StatusBar
        
      />
      <Text>ayo!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  constainer : {
    flex : 1
  }
});

export default App;
