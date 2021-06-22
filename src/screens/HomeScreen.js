import React from 'react';
import {View, StyleSheet, Text,} from 'react-native';
import CTAButton from '../components/CTAButton';
import Spacer from '../components/Spacer'

const HomeScreen = ({navigation})=>{


    return<View style = {styles.container}>
        <CTAButton text = {"Cache Image"} onPress = {()=>navigation.navigate("CacheImage")} />
        <Spacer/>
        <CTAButton text = {"drawing board"} onPress = {()=>navigation.navigate("DrawingBoard")} />
        <Spacer/>
        <CTAButton text = {"notakto"} onPress = {()=>navigation.navigate("Notakto")} />
    </View>
};

const styles = StyleSheet.create({

    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
});


export default HomeScreen;