import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true
    }
    this.mountCounter = () => this.setState({mount: true});
    this.unMountCounter = () => this.setState({mount: false});
  }
  render() {
    return <div>
      <button onClick = {this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
      <button onClick = {this.unMountCounter} disabled={!this.state.mount}>UnMount Counter</button>
      <Counter />
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));