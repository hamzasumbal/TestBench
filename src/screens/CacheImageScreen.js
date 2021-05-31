import React, { useEffect } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import CacheImage from '../components/CacheImage';
import CTAButton from '../components/CTAButton';

const CacheImageScreen = ({ navigation }) => {


    const ImageURL = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"


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