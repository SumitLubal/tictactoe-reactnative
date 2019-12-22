import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Game} from "./gameboard.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Game></Game>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
