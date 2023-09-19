import React from 'react'
import type { PropsWithChildren } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name : string;
    flag : string;
}>

const CurrencyButton = (props : CurrencyButtonProps): JSX.Element => {
    return ( 
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.namer}>{props.name}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
        buttonContainer : { 
        alignItems : "center",
    },
    flag : {
        fontSize : 28,
        color : "#FFF",
        marginBottom : 4, 
    },
    namer :{
        fontSize : 14,
        color : "#2d3436",
    }
});

export default CurrencyButton
