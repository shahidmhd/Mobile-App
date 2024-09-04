import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Login({ onGetStarted }) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={require('./../../../assets/images/login.png')}
                style={styles.loginImage}
            />
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 20, color: Colors.WHITE, textAlign: 'center' }}>
                    Let's Find
                    <Text style={{ fontWeight: "bold" }}> Professional Cleaning and repair </Text>
                    Service
                </Text>
                <Text style={{ fontSize: 10, color: Colors.WHITE, textAlign: 'center', marginTop: 20 }}>Best App to find services near you which deliver you a professional Service</Text>
                <TouchableOpacity style={styles.button} onPress={onGetStarted}>
                    <Text style={{ textAlign: 'center', fontSize: 17, color: Colors.PRIMARY }}>Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 50,
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 15
    },
    subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '50%',
        // marginBottom:-20,
        marginTop: -55,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 18
    }
})
