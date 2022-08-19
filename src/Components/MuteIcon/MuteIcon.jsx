import React from 'react'
import { Image, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MuteIcon = ({ mode, style, color, width, text, image, ...props }) => (
    <TouchableOpacity>
        <View style={styles.muteView} >
            <Image source={image} style={styles.muteItem} resizeMode="contain"/>
            <Text style={styles.muteIconText} > {text} </Text>
        </View>
    </TouchableOpacity>
)

const onMuteIconClick = () => {
    
}

const styles = StyleSheet.create({
    muteView :{
        margin: '5%',
    },
    muteItem: {
        width: 70,
        height: 70,
        display: "flex",
        alignSelf: "center"
    },
    muteIconText: {
        marginTop: "10%",
        alignSelf: "center",
        
    }
})

export default MuteIcon
