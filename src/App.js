import React, { Component } from 'react';
import clock from './Vintage-Clock.svg';
import hour from './Vintage-Hour.svg';
import minute from './Vintage-Minute.svg';
import second from './Vintage-Second.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
  
    this.state = {
      hour: '',
      minute: '',
      second: ''
    }
  }

  async componentDidMount() {

    setInterval(async () => {
        await this.setTime()
    }, 1000)

  }

  setTime = async () => {
    var d = new Date(),
    s = d.getSeconds() * 6,
    m = d.getMinutes() * 6 + (s / 60),
    h = d.getHours() % 12 / 12 * 360 + (m / 12); 

    this.setState({second: s, minute: m, hour:  h});
  }

  render() {
    return (
      <div className="App">
        <div className="Clock">
          {this.time}
          <img className="BackgroundImage" alt="Clock Face" src={clock}></img>
          <img className="SecondHand" alt="Second Hand" src={second} style={{transform: 'rotate(' + this.state.second + 'deg)'}}></img>
          <img className="HourHand" alt="Hour Hand" src={hour} style={{transform: 'rotate(' + this.state.hour + 'deg)'}}></img>
          <img className="MinuteHand" alt="Minute Hand"src={minute} style={{transform: 'rotate(' + this.state.minute + 'deg)'}}></img>
        </div>
      </div>
    )
  }
}

export default App;
