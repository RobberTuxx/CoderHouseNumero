import React from "react";
import {Button, Text, View, StyleSheet} from "react-native";
import {styleGeneral} from "../Constants/Styles";
import Card from "../components/Card";
import {Colors} from "../Constants/Colors";

export default function GameStart(){

    return (
        <View style={styleGeneral.containerScreen}>
            <Text style={{marginTop:20}}>La suposición del oponente</Text>
            <Text style={style.number}>50</Text>
            <Card style={style.containerButtons}>
                <Button title={'Menor'} onPress={()=>{}}/>
                <Button title={'Mayor'} onPress={()=>{}}/>
            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    containerButtons:{
        width:250,
        height:50,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    number: {
        color: Colors.primary,
        fontSize:22
    }
})
