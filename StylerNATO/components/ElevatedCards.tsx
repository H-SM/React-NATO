import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>And</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Find</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>YOU ARE CLOSE!</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>RIGHT THERE!!</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>a little more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>🍪</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>YOU FOUND A COOKIE!!!</Text>
        </View>
      </ScrollView>
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
    card : { 
        width : 100,
        height : 100, 
        flex : 1, 
        flexDirection : 'row', 
        justifyContent : 'center', 
        alignItems : 'center', 
        borderRadius : 4,
        margin : 8,
    },
    cardElevated : {
        backgroundColor : '#CAD5E2', 
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },//not working, look into this
        shadowColor: '#EF5354',
        shadowOpacity: 0.7,
        shadowRadius: 2,
    },
    container :{ 
        padding : 8, 
    }
});
