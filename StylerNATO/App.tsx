import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

function App (){
    return (
      <SafeAreaView>
        <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        </ScrollView>
      </SafeAreaView>
    );
}

export default App;
