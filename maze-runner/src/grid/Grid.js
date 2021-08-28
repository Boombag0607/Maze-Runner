// making a component on which maze will be formed
import React from "react";
import "./Grid.css";

export class Square extends React.Component {
  state = {
    clicked: false,
  };
  handleClick = (state) => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    let inputStyle = {};
    if (this.state.clicked) {
      inputStyle = {
        height: 42,
        width: 42,
        border: "1px solid black",
        background: "black",
      };
    } else {
      inputStyle = { height: 42, width: 42, border: "1px solid black" };
    }
    return <div style={inputStyle} onClick={this.handleClick}></div>;
  }
}

export default class Grid extends React.Component {
  state = {};
  render() {
    let gridArr = Array(16)
      .fill(null)
      .map((x) => Array(16).fill(null));
    return (
      <div className="grid">
        {gridArr.map((arr, j) =>
          arr.map((x, i) => <Square className="square" key={i + j} />)
        )}
      </div>
    );
  }
}
