import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from "./src/components/Header";
import StartGame from "./src/screens/StartGame";
import GameStart from "./src/screens/GameStart";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    const [loaded] = useFonts({
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
        OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!loaded) return <AppLoading/>

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <StartGame/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
