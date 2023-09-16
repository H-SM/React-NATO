import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid : 1, 
            name : 'HSM', 
            status : "Loves to hunt to Tech!",
            imageURL : "https://avatars.githubusercontent.com/u/98532264?v=4"
        },
        {
            uid : 2, 
            name : 'Sid', 
            status : "He is a Sloth",
            imageURL : "https://avatars.githubusercontent.com/u/92656939?v=4"
        },
        {
            uid : 3, 
            name : 'Vinay', 
            status : "I am a NOOB",
            imageURL : "https://avatars.githubusercontent.com/u/97795121?v=4"
        },
        {
            uid : 4, 
            name : 'dioptx', 
            status : "Someone in this big world!",
            imageURL : "https://avatars.githubusercontent.com/u/20043465?v=4"
        },
    ];
  return (
    <View>
        <Text style={styles.headingText}>Contact List</Text>
        <ScrollView style ={styles.container} scrollEnabled={false}>
            {contacts.map(({uid, name, status, imageURL}) => (
                <View key={uid} style={styles.userCard}>
                    <Image
                    source={{uri :imageURL}}
                    style={styles.userImage}/>
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
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
        marginBottom : 8,
    },
    container :{
        paddingHorizontal : 16,
        marginBottom : 4,
    },
    userCard:{
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom : 4,
        backgroundColor : '#99C1EA',
        padding : 4, 
        borderRadius : 7, 
    },
    userImage :{
        height : 60,
        width :60,
        borderRadius : 30,
        marginRight : 14,
    },
    userName:{
        fontSize : 16,
        fontWeight : 'bold',
        color : '#1E262E'
    },
    userStatus:{
        fontSize : 13,
        fontWeight : '400',
        marginTop : -2,
    },
})