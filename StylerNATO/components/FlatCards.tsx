import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.viewBox}>
        <View style={[styles.boxes, styles.redBox]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.boxes, styles.greenBox]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.boxes, styles.blueBox]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.boxes, styles.blueBox]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText :{
    color : "black",
    fontSize : 20,
    marginTop : 8,
    fontWeight : "600",
    paddingHorizontal : 10,
  },
  viewBox : {
    flex : 1,
    flexDirection : 'row',
    padding : 8, 

  },
  boxes: {
    width : 100,
    height : 100,
    borderRadius : 4,
    margin : 8,
    flex : 1, 
    justifyContent : 'center',
    alignItems :'center',
  },
  redBox :{
    backgroundColor : '#EF5354',
  },
  greenBox :{
    backgroundColor : '#50DBB4',
  },
  blueBox :{
    backgroundColor : '#5da3fa',
  }
  

});
export default FlatCards