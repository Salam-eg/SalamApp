import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Audio } from 'expo-av';

const MuteIcon = ({ text, image, audio, ...props }) => (
    <TouchableOpacity onPress={() => onMuteIconClick(audio)}>
        <View style={styles.muteView} >
            <Image source={image} style={styles.muteItem} resizeMode="contain"/>
            <Text style={styles.muteIconText} > {text} </Text>
        </View>
    </TouchableOpacity>
)

const onMuteIconClick = async (audio) => {
    // TO-DO add a sound player for user controls and feedback that sound is playing.
    const { sound } = await Audio.Sound.createAsync(audio);
    await sound.playAsync();
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
