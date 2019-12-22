import React from "react";
import {StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  row:{
    flex: 1,
    flexDirection:'row',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class Square extends React.Component {
  render() {
    return (
      <View>
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
          <Square symbol="0" style={styles.row}/>
          <Square symbol="1" style={styles.row}/>
          <Square symbol="2" style={styles.row} />
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
