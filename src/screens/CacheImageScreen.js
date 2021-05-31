import React, { useEffect } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import CacheImage from '../components/CacheImage';
import CTAButton from '../components/CTAButton';

const CacheImageScreen = ({ navigation }) => {


    const ImageURL = "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"


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