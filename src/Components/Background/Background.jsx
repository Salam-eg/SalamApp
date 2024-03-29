import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, ScrollView, View, Text, Pressable } from 'react-native';
import { theme } from '../../Utils/Theme/Theme';
import backgroundDot from '../../assets/background_dot.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHandsAslInterpreting } from '@fortawesome/free-solid-svg-icons/faHandsAslInterpreting';
import { muteScreen } from '../../Utils/Constants/ScreenNames';

const Background = ({ requiredStyle, children, navigate, disableMuteIcon }) => {

  const openMutePage = () => {
      navigate(muteScreen)
  }
  return (
    <ImageBackground
      source={backgroundDot}
      resizeMode="repeat"
      style={styles.background}
    >
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView style={requiredStyle ? [styles.container, requiredStyle] : [styles.container]}  behavior="padding" keyboardVerticalOffset={10}>
            {children}
        </KeyboardAvoidingView>
      </ScrollView>
      <View style = {styles.footer} >
        <Text style={styles.footerText}>
          وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ
        </Text>
        {!disableMuteIcon && <View>
            <Pressable style = {styles.signLanguageIcon} onPress={() => openMutePage()}>
              <FontAwesomeIcon icon={faHandsAslInterpreting} color={theme.colors.primary} size={32} />
            </Pressable>
        </View>}
      </View>
    </ImageBackground>
  )
} 

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  children: {
    position: "absolute"
  },
  scrollView: {
    width: '100%',
    alignSelf: 'center',
  },
  footer: {
    display:"flex",
    height:" 5%"
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.primary,
    alignSelf: "center"
  },
  signLanguageIcon : {
    marginHorizontal: '5%',
    marginTop: '-5%'
  }
})

export default Background
