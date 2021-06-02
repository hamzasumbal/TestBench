import React, { useEffect } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import CacheImage from '../components/CacheImage';
import CTAButton from '../components/CTAButton';

const CacheImageScreen = ({ navigation }) => {


    const ImageURL = "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/03/1-24.jpg"


    return <View style={styles.container}>
        <CacheImage source={{
            uri: ImageURL
        }}
            style={{
                width: 300,
                height: 300,
            }}

        />
    </View>
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});


export default CacheImageScreen;