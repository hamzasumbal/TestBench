import React from 'react';
import {View, StyleSheet, Text,} from 'react-native';
import CTAButton from '../components/CTAButton';


const HomeScreen = ({navigation})=>{


    return<View style = {styles.container}>
        <CTAButton text = {"Cache Image"} onPress = {()=>navigation.navigate("CacheImage")} />
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