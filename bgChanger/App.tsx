import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [bgColor, setBgColor] = useState('#FFF');

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.round(Math.random()*16)];
    }
    setBgColor(color);
  }
  return (
    <>
    <StatusBar backgroundColor={"#000"}/>
    <View style={[styles.container,{backgroundColor : bgColor}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style = {styles.actionbtn}>
          <Text style={styles.actionbtnTxt}>Press me!</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  actionbtn :{
    borderRadius : 12,
    backgroundColor : "#6A1B4D",
    paddingVertical : 10,
    paddingHorizontal : 40,
  },
  actionbtnTxt : {
    color : "#FFF",
    fontSize : 18,
    fontWeight : '700',
    textTransform : "uppercase",
  }
});

export default App;
