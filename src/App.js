import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg'
import Background from './Background/Background'
import Mountains from './Background/Mountains'
import RollingHills from './Background/RollingHills'
import Robot from './Robot/Robot'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ParallaxBot</h1>
        </header>
        <div className='container' >
          <Background/>
          <Mountains/>
          <RollingHills/>
          <Robot/>
              {/* <div className='fore' style={{ background: RollingHills }}>
                <div className='figure' style={{ background: Robot }}></div>
              </div> */}
        </div>
      </div>
    );
  }
}

export default App
