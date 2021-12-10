import React from "react";
import {StyleSheet, TextInput} from "react-native";

export default function Input(props: any) {

    const handlerInput = (text: string) => {
        props.setValue(text.replace(/[^0-9]/g, ''))
    }

    return (
        <TextInput style={style.container}
                   value={props.value}
                   onChangeText={handlerInput}
                   keyboardType={'numeric'}
                   maxLength={2}
        />
    )
}

const style = StyleSheet.create({
    container: {
        marginVertical: 20,
        width: 80,
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        textAlign: "center"
    }
})
