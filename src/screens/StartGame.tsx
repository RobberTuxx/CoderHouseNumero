import React, {useState} from "react";
import {Alert, Button, Dimensions, Image, StyleSheet, Text, View} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import {Colors} from "../Constants/Colors";
import {styleGeneral} from "../Constants/Styles";
import * as ScreenOrientation from 'expo-screen-orientation';

export default function StartGame(props: any) {

    const [isPortraid, setIsPortraid] = useState(false)
    const [value, setValue] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [numberSelect, setNumberSelect] = useState(0)
    console.log("ancho: ", Dimensions.get("window").width)
    console.log("alto: ", Dimensions.get("window").height)
    ScreenOrientation.getOrientationAsync().then(value1 => {
        setIsPortraid(value1 < 2)
    })
    const clean = () => {
        setValue('')
    }
    const handlerConfirm = () => {
        Alert.alert('hola soy un alert','este es un mensaje de un alert',[{
            text: 'hola',
            style: "default"
        },{
            text: 'adios',
            style: "cancel",
        }])
        const numberPaser = parseInt(value)
        if (numberPaser !== NaN || numberPaser <= 0 || numberPaser > 99) return
        setConfirm(true)
        setValue('')

    }
    return (
        <View style={styleGeneral.containerScreen}>
            <Text style={style.title}>Comenzar juego</Text>
            <View style={{flexDirection: isPortraid? 'row' : 'column'}}>
                <Card style={style.card}>
                    <Text style={{fontFamily: 'OpenSansBold'}}>Elija un número</Text>
                    <Input value={value} setValue={setValue}/>
                    <View style={style.containerButton}>
                        <Button title={'Limpiar'} onPress={clean} color={Colors.accent}/>
                        <Button title={'Confirmar'} onPress={handlerConfirm} color={Colors.primary}/>
                    </View>
                </Card>
                <Card style={style.card2}>
                    <Text style={style.title}>Tu selección</Text>
                    <Text style={{color: Colors.primary}}>25</Text>
                    <Button title={'Empezar juego'} onPress={() => {
                    }}/>
                </Card>
            </View>

            </View>
    )
}

const style = StyleSheet.create({

    title: {
        marginVertical: 10,
        fontSize: 16
    },
    card: {
        minWidth:'60%',
        maxWidth: '80%',
        minHeight: '10%',
        maxHeight: '80%'
    },
    card2: {
        width: 150,
        height: 100
    },
    containerButton: {
        width: 300,
        flexDirection: "row",
        justifyContent: "space-around",
    },
})
