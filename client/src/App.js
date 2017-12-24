import React from 'react';
import 'whatwg-fetch';

import Home from './Home'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      apiStatus: ''
    }
  }
  componentDidMount() {
    fetch('/api/status')
      .then(res => {
        this.setState({apiStatus: res.statusText})
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div style={{height: '100vh'}}>
        <Home apiStatus={this.state.apiStatus}/>
      </div>
    )
  }
}

export default App;
