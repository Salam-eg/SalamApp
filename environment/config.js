import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDFBz7aqsT0zdZd2ZEI14Bw25MQXp_hjhE",
    authDomain: "salam-beta.firebaseapp.com",
    projectId: "salam-beta",
    storageBucket: "salam-beta.appspot.com",
    messagingSenderId: "1027737482237",
    appId: "1:1027737482237:web:f2619ad601838d37c49f94",
    measurementId: "G-ZRSJ1CRK4J",
    databaseURL: "https://salam-beta-default-rtdb.europe-west1.firebasedatabase.app",
};

export const firebaseApp = initializeApp(firebaseConfig);


