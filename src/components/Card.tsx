import React from "react";
import {StyleSheet, View} from "react-native";

export default function Card(props: any) {
    return (
        <View style={{...props.style, ...style.container}}>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        elevation: 5,
        backgroundColor: 'white'
    }
})
