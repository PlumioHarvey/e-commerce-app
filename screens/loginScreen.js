import React, {useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, } from 'react-native'


const onscreen = () => {


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput  placeholder='Email'
                style={styles.input,font= 'bold'}/>

                <TextInput  placeholder='Password'
                style={styles.input, font='bold'}
                secureTextEntry/>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=> {}}
                style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={console.log("help")}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default onscreen
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#5f9ea0"
    },

    inputContainer: {
        width: "80%",
        // height: "10%",
    },
    input: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 13,
        marginBottom: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#f0f8ff',
        width: "85%",
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff'
    },
    buttonOutline: {
        backgroundColor: "#fff",
        borderColor: "#f0f8ff",
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: "#f0f8ff"
    },
})