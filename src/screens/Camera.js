import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';


const CameraScreen = ({navigation})=>{

    const xanim = useRef(new Animated.Value(0)).current;
    const yanim = useRef(new Animated.Value(0)).current;
    const heightanim = useRef(new Animated.Value(0)).current;
    const widthanim = useRef(new Animated.Value(0)).current;

    const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return<View style = {styles.container}>
        <Camera style={styles.camera} type={type}
        /* onFacesDetected={this.handleFacesDetected} */
        onFacesDetected = {(event)=>{
            console.log(event.faces.length !== 0?  event.faces[0].faceID: null)
            xanim.setValue(event.faces.length !== 0?  event.faces[0].bounds.origin.x : 0)
            yanim.setValue(event.faces.length !== 0?  event.faces[0].bounds.origin.y : 0)
            heightanim.setValue(event.faces.length !== 0?  event.faces[0].bounds.size.height : 0)
            widthanim.setValue(event.faces.length !== 0?  event.faces[0].bounds.size.width : 0)
        }}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.fast,
          detectLandmarks: FaceDetector.Constants.Landmarks.none,
          runClassifications: FaceDetector.Constants.Classifications.none,
          minDetectionInterval: 100,
          tracking: true,
        }}
        >
            <Animated.View
            style = {{
                width : widthanim,
                height : heightanim,
                borderWidth : 2,
                borderColor : "red",
                position : "absolute",
                top : yanim,
                left : xanim
            }}
            />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
};

const styles = StyleSheet.create({

    container : {
        flex : 1,
    },
    camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
      },
      button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
});


export default CameraScreen;