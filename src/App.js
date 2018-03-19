import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import './App.css'
import logo from './logo.svg'
import Mountains from './Background/Mountains'
import RollingHills from './Background/RollingHills'
import Robot from './Robot/Robot'
import MidgroundTrees from './Background/MidgroundTrees';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class App extends Component {
  
  state = {
    displayColorPicker: false,
    color: {
      r: '109',
      g: '109',
      b: '120',
      a: '1',
    },
    movement: 50,
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

  adjustValue = (value) => {
    this.setState({movment: value})
    console.log(value)
  }

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
              <div >
                <p>Robot Movement</p>
                <Slider style={{ width: '100px', display: 'inline-block'}} onChange={this.adjustValue} />
              </div>
              {/* <div >
                <p>Robot Speed</p>
                <Slider onChange={log} />
              </div>
              <div >
                <p>Robot Height</p>
                <Slider onChange={log} />
              </div> */}
            </div>
          </div>
          <div className='container' >
            <Mountains/>
            <MidgroundTrees/>
            <RollingHills/>
            <Robot color={this.state.color}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App
