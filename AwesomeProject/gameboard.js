import React from "react";
import {StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row:{
    flex: 1,
    flexDirection:'row',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    height: 34,
    justifyContent: 'space-evenly',
    justifyContent: "center",
    textAlign:"center",
    borderColor:'#999',
    borderWidth:1,
  }
});

class Square extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.symbol}</Text>
      </View>
    );
  }
}
class Board extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.row}>
          <Square symbol="0"/>
          <Square symbol="1"/>
          <Square symbol="2"/>
        </View>
        <View style={styles.row}>
          <Square symbol="3" />
          <Square symbol="4" />
          <Square symbol="5" />
        </View>
        <View style={styles.row}>
          <Square symbol="6" />
          <Square symbol="7" />
          <Square symbol="8" />
        </View>
      </View>
    );
  }
}
export class Game extends React.Component {
  render() {
    return <Board />;
  }
}
