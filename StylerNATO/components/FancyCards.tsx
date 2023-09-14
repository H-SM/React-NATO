import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card , styles.elevated]}>
            <Image
                source={{
                    uri: 'https://w0.peakpx.com/wallpaper/611/898/HD-wallpaper-orange-landscape-morning-minimal.jpg'
                }}
                style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Orange Landscape</Text>
                <Text style={styles.cardLabel}>Mountains of the North</Text>
                <Text style={styles.cardDescription}>Such a wonderful site to withhold. You can't unsee it after you have seen it once. It's truly a site to seen once in a lifetime.</Text>
                <Text style={styles.cardFooter}>69 mins away</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontWeight: '600',
        paddingHorizontal: 8,
        color : "black",
        fontSize : 20,
    },
    card:{
        width : 350,
        height : 360, 
        borderRadius : 6, 
        marginVertical : 12, 
        marginHorizontal : 16, 
    },
    elevated:{
        backgroundColor: "#FFCD50", 
        color: "#0061ff",
        elevation: 3, 
        shadowOffset: { 
            width: 1, 
            height: 1
        }
    },
    cardImage:{
        height: 180,
        marginBottom:8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody:{
        flex : 1,
        flesDirecton: 'column',
        flexGrow : 1,
        paddingHorizontal : 12,
    },
    cardTitle:{
        color: "#100D33",
        fontSize: 22, 
        fontWeight : 'bold',
        marginBottom: 4,
    },
    cardLabel:{
        color: "#100D33",
        fontSize: 14, 
        fontWeight : '500',
        marginBottom : 6,
        
    },
    cardDescription:{
        color: "#100D33",
        fontSize: 13, 
        marginBottom : 12,
        marginTop: 6,
        flexShrink : 1,
    },
    cardFooter:{
        color: "#100D33",
        justifyContent : 'flex-end'
    },
})