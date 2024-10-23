import React from 'react';

export default class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0,
    };
    this.increment = () => this.setState({counter:this.counter+1});
    this.decrement = () => this.setState({counter:this.counter-1});
  }
  render(){
    return <div>
      <button onClick = {this.increment}>Increment</button>
      <button onClick = {this.decrement}>Decrement</button>
      <div className="counter">
      Counter: {this.state.counter}
      </div>
    </div>
  }
}