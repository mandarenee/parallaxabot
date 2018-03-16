import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import './App.css'
import logo from './logo.svg'
import Background from './Background/Background'
import Mountains from './Background/Mountains'
import RollingHills from './Background/RollingHills'
import Robot from './Robot/Robot'

class App extends Component {
  state = {
    robotColor: '#fff',
  };
  
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '12px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
        text: {

        }
      },
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ParallaxBot</h1>
        </header>
        <div>
          <div className='controls'>
            <h1> Invader controls </h1>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <div style={styles.text}> Robot Color: </div>  
              <div style={styles.swatch} onClick={this.handleClick}>
                <div style={styles.color} />
              </div>
              {this.state.displayColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={this.handleClose} />
                <SketchPicker color={this.state.color} onChange={this.handleChange} />
              </div> : null}

            </div>
          </div>
          <div className='container' >
            <Background/>
            <Mountains/>
            <RollingHills/>
            <Robot/>
          </div>
        </div>
      </div>
    );
  }
}

export default App
