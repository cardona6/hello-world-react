import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      color: "counterRed",
      multiply: 1
    }
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    this.chagecolor();
  }

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
    this.chagecolor();
  }

  chagecolor = () => {
    if (this.state.counter % 2 === 0) {
      //Even    2 4 6 8
      this.setState({
        color: "counterGreen"
      })

    } else {
      //ODD  1 3  5 7 9
      this.setState({
        color: "counterRed"
      })
    }
  }
  multipleCounter = () => {
    this.setState({
      counter: this.state.counter * this.state.multiply
    })

    this.chagecolor()
  }

  handleRangeChange = (event) => {
    this.setState({
      multiply: event.target.value
    })
  }

  render() {

    return (
      <div>
        <br />
        <h1 >
          <span>Counter :</span>
          <span className={this.state.color}> {this.state.counter}</span>
        </h1>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
        <button onClick={this.multipleCounter}>multiply</button>
        <input type="range" onChange={this.handleRangeChange}></input>
        <h2>
          <span>Multiplier: {this.state.multiply}</span>
        </h2>
      </div>
    )
  }
}

export default Counter;