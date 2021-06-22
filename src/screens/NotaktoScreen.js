import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import CTAButton from "../components/CTAButton";
import Spacer from "../components/Spacer";
import { WebView } from "react-native-webview";

const NotaktoScreen = ({ navigation }) => {
  return (
      <>
      <SafeAreaView style = {{flex : 0, backgroundColor : "black"}}/>
    <SafeAreaView style = {{flex: 1, backgroundColor: "black"}}>
      <WebView
        source={{ uri: "https://notakto-play.web.app" }}
        style = {{
            backgroundColor : "black"
        }}
      />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NotaktoScreen;
