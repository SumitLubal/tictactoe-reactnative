import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    height: 50,
    justifyContent: "space-evenly",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "#999",
    borderWidth: 1
  },
  squareText: {
    textAlign: "center",
    fontSize: 30
  }
});

class Square extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.props.symbol}
          style={styles.squareText}
          onPress={() => this.props.onClick()}
        />
      </View>
    );
  }
}
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        symbol={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
        <Text style={{ fontSize: 30, marginBottom: 10 }}>
          {this.props.status}
        </Text>
        <View style={styles.row}>
          <Button
            title="Reset"
            onPress={() => this.props.onClickReset()}
          ></Button>
          <Button
            title="Previous"
            onPress={() => this.props.onClickPrevious()}
          ></Button>
        </View>
      </View>
    );
  }
}
export class Game extends React.Component {
  constructor(props) {
    super(props);
    // prepare a array that remembers array
    // prepare a nextmove
    this.state = {
      squares: Array(9).fill(""),
      isNextMoveX: true,
      status: "X",
      history: Array()
    };
  }
  handleClick(i) {
    if (calculateWinner(this.state.squares) || this.state.squares[i]) {
      return;
    }
    let tmpArr = this.state.squares.slice();
    tmpArr[i] = this.state.isNextMoveX ? "X" : "O";
    let hist = this.state.history.slice()
    this.setState({
      squares: tmpArr,
      isNextMoveX: !this.state.isNextMoveX,
      history:Array()
    });
  }
  onClickReset() {
    this.setState({
      squares: Array(9).fill(""),
      isNextMoveX: true
    });
  }
  onClickPrevious() {
    if (this.state.history) {
      return;
    }
    let last = this.state.history.slice()
    
    this.setState({
      squares: this.last.pop(),
      history:last
    });
  }
  render() {
    let message = "";
    if (calculateWinner(this.state.squares)) {
      message = "Winner is: " + calculateWinner(this.state.squares);
    } else {
      message = "Next player is: " + (this.state.isNextMoveX ? "X" : "O");
    }
    return (
      <Board
        squares={this.state.squares}
        onClick={i => {
          this.handleClick(i);
        }}
        status={message}
        onClickReset={() => this.onClickReset()}
        onClickPrevious={() => this.onClickPrevious()}
      />
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
