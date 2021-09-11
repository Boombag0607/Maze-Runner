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
  state = {
    input: 0,
    size: 0,
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  changeSize = () => {
    this.setState({
      size: this.state.input,
    });
    console.log(this.state.size);
  };
  render() {
    let gridArr = Array(this.state.size)
      .fill(null)
      .map((x, i) => Array(this.state.size.fill(null)));
    return (
      <div>
        <div>
          <input
            value={this.state.input}
            type="number"
            onChange={this.handleChange}
          ></input>
          <button type="submit" onClick={this.handleChange}>
            Submit
          </button>
        </div>
        <div
          className="grid"
          style={{
            display: "inline-block",
            //flexWrap: 'wrap'
          }}
        >
          {
            // Array(this.state.size)
            //   .fill(null)
            //   .map((x, j) =>
            //     Array(this.state.size)
            //       .fill(null)
            //       .map((y, i) => (
            //         <Square className="square" key={i + j}></Square>
            //       ))
            //   )
            gridArr.map((arr, j) =>
              arr.map((x, i) => <Square className="square" key={i + j} />)
            )
          }
        </div>
      </div>
    );
  }
}
