import React from "react";

import { 
    View,
    SafeAreaView,
    Text,
    useColorScheme,//light, dark, null (its a hook which looks over the state of theme in the application)
    StyleSheet,

} from 'react-native';


function AppPro () : JSX.Element {//only give a JSX type output
    const isDarkMode = useColorScheme() === 'light'; 
    return ( 
        // <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello WORLD !</Text>
            </View>
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    whiteText: { 
        color : '#FFFFFF'
    },
    darkText: { 
        color : '#000000'
    }
});
export default AppPro;