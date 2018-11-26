import React from 'react'
import './_count.scss'
import Link from 'gatsby-link'

class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  countDown() {
    const eventDate = new Date('April 19, 2019 9:00:00').getTime()
    const current = new Date().getTime()
    const distance = eventDate - current

    this.setState(prevState => ({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.countDown())
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div id="countdown">
        <p>Event Starts</p>
        <span>
          {this.state.days} d | {this.state.hours} h | {this.state.minutes} m |{' '}
          {this.state.seconds} s
        </span>
      </div>
    )
  }
}

export default Count
