import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  state = {
    showClock: false
  }
  onToggleClock = () => {
    this.setState( prevState => {
      const { showClock } = prevState
      return {
        showClock: !showClock
      }
    })
  }


  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick = () => {
    this.setState({
      date: new Date()
    })
  }
  render() {
    const { date } = this.state
    const { showClock } = this.state

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
        {showClock &&  <button onClick={ this.onToggleClock } type="button" className="toggle-button">
          {showClock ? 'Show Clock' : 'Hide Clock'}
        </button>}
      </div>
    )
  }
}

export default  Clock