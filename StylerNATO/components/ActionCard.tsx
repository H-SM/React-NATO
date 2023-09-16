import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebPage(websiteLink : string) {
        Linking.openURL(websiteLink);
    }
    return (
    <View>
      <Text style={styles.headingText}>Portfolio Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                Who am I? Here's my Portfolio
            </Text>
        </View>
        <Image
            source={
                {uri: 'https://i.imgur.com/Qb5mE89.gif'}
            }
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text numberOfLines={3}>
            This is Harman Singh Malhortra. A full-stack enthusiast, showcasing diverse projects on GitHub, exploring web software realms. Passionate about coding & creating innovative solutions. "Innovative lines of code intertwining to craft digital solutions that inspire and impact."
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebPage('https://github.com/H-SM/')}>
                <Text style={styles.socialLinks}>Read More...</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => openWebPage('https://www.instagram.com/hsmpaaji/?hl=en')}
            >
                <Text style={styles.socialLinks}>Follow Further...</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        color : "black",
        fontSize : 20,
        marginTop : 8,
        fontWeight : "600",
        paddingHorizontal : 10,
    },
    card : {
        width : 350,
        height : 350,
        borderRadius :  6, 
        marginVertical : 12,
        marginHorizontal : 16, 
        
    },
    elevatedCard : {
        backgroundColor : '#82d3eb',
        elevation: 3, 
        shadowOffset: { 
            width: 1, 
            height: 1
        },
        shadowColor : '#333',
        shadowOpacity : 0.3,
    },
    headingContainer : {
        height : 40,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : "center",
    },
    headerText:{
        color : '#000',
        fontSize : 16,
        fontWeight : '700',
    },
    cardImage:{
        height : 180, 
        
    },
    cardBody: {
        padding : 10, 

    },
    footerContainer:{
        padding : 8, 
        flexDirection : 'row',
        alignItems : 'center', 
        justifyContent : 'space-evenly', 
        marginTop: 5,
    },
    socialLinks:{
        fontSize : 16,
        color: '#000',
        backgroundColor : '#fff',
        paddingHorizontal : 17,
        paddingVertical : 5,
        borderRadius : 8,
        elevation: 3, 
        shadowColor : '#333',

    },
})