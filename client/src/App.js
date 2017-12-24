import React from 'react';
import 'whatwg-fetch';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      body: ''
    }
  }
  componentDidMount() {
    fetch('/api')
      .then(res => res.text())
      .then(body => this.setState({body}))
      .catch(err => console.log('err: ', err))
  }
  render() {
    return (
      <div>
        <h1>Cookie Jar</h1>
        <h4>{this.state.body}</h4>
      </div>
    )
  }
}

export default App;
