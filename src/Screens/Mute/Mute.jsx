
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Background, Header, MuteIcon } from '../../Components';
import { muteIcons } from '../../Utils/Helpers/MutePageHelpers';
export default class Mute extends React.Component {
    render() {
        return (
            <Background style={{marginTop:'5%'}} disableMuteIcon="true" >
                <View style={styles.muteHeader}>
                <Header > Click on any icon to play its voice over </Header>
                </View>
            <View style={styles.container}>
                {muteIcons.map((icon, i) =>  <MuteIcon key={icon.id} image={icon.uri} text={icon.label} audio={icon.audio} /> )}
            </View>
            </Background>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "flex-start",
        width:'140%'
    },
    muteHeader: {
        marginTop:'5%'
    }
})