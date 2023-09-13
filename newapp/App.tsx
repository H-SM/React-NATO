import React from "react";

import {
  View,//like a div, to wrap up a few propeeties which we want
  Text,
  SafeAreaView, //avoid the notches of the phone
  Button,
} from 'react-native';

function App () {
  return (
  <SafeAreaView>
    <View>
      <Text>
        Hello World!
      </Text>
      <Button
       title="Press me"
       onPress={() => {}}/>
    </View>
  </SafeAreaView>
  );
}
export default App;