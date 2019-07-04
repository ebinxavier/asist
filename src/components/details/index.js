import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';
const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome} onPress={() => Actions.push("home")}>
        Details Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#bbbb00"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  }
});

export default DetailsScreen;
