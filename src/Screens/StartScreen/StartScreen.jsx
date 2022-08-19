import React, { useEffect } from 'react';
import { Background, Logo, Header, Paragraph, Button, ImageButton } from '../../Components';
import { mainScreen } from '../../Utils/Constants/ScreenNames';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from '../../../environment/config';
import { Login } from '../../Views';

const auth = getAuth(firebaseApp);


export default function StartScreen({ navigation }) {

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                navigation.navigate(mainScreen)
            }
        });
    }, []);

    return (
        <Background requiredStyle={{ marginTop: '20%' }} navigate={navigation.navigate}>
            <Logo />
            <Header>Salam</Header>
            {/* <Paragraph>
                Let's make the world a better place, one سلام at a time. (pun intended)
            </Paragraph> */}
            < Login />
        </Background>
    )
}
