import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FlatCards from './components/FlatCards';

function App (){
    return (
      <SafeAreaView>
        <ScrollView>
        <FlatCards/>
        </ScrollView>
      </SafeAreaView>
    );
}

export default App;
