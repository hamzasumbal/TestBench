import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


const CTAButton = ({text, onPress})=>{


    return<TouchableOpacity style = {styles.container} onPress = {onPress}>
        <Text style = {styles.text}>{text}</Text>
    </TouchableOpacity>
};


const styles = StyleSheet.create({
    container  :{
        width : "auto",
        paddingHorizontal  : 20,
        height : 50,
        borderRadius :10,
        borderWidth : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    text : {
        fontSize :  16,
        fontWeight : "bold"
    }

});


export default CTAButton;