import React, { useRef , useState, useEffect} from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
import CTAButton from '../components/CTAButton';
import Signature from 'react-native-signature-canvas';
import SignatureScreen from 'react-native-signature-canvas';

const DrawingBoard = ({ navigation }) => {

    const [signature, setSign] = useState(null);
    const [end, setEnd] = useState(null)
    const [pen, setPen] =useState("black")
    const [key, setKey] = useState(0);
    const ref = useRef();
  const handleSignature = signature => {
   /*  console.log(signature); */
    setSign(signature);
    /* console.log(ref.current.readSignature()) */
  };

  const handleEmpty = () => {
    //console.log('Empty');
  }

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }
    .m-signature-pad {
        height : 400px
    }
    `;

    useEffect(()=>{

      const a  =   setInterval(()=>{
            ref.current.readSignature()
        },100)

        setEnd(a)

        return ()=>{
            clearInterval(a)
        };

    },[])


    return <View style={styles.container}>
       <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 114, backgroundColor : "green" }}
            source={{ uri: signature }}
            key = {signature}
          />
        ) : null}
      </View>
      <Signature
       ref={ref}
        onOK={handleSignature}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        backgroundColor = {"transparent"}
        webStyle={style}
        onClear = {()=>{
            clearInterval(end)
        }}
        penColor = {pen}
        key = {key}
      />
      
    </View>
};

const styles = StyleSheet.create({
    preview: {
      width: 335,
      height: 114,
      backgroundColor: "#F8F8F8",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15
    },
    previewText: {
      color: "#FFF",
      fontSize: 14,
      height: 40,
      lineHeight: 40,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: "#69B2FF",
      width: 120,
      textAlign: "center",
      marginTop: 10
    },
    container : {
        flex :1
    }
  });


export default DrawingBoard;