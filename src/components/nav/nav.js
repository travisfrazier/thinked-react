import React from 'react'
import './_nav.scss'
import Link from 'gatsby-link'

export class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
    }
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu,
      }
    })
  }

  render() {
    return (
      <nav>
        <div className="mobile-menu">
          <div />
          <div />
          <div />
        </div>
        <div className="container nav-container">
          <ul className="nav-links">
            <a href="#about">
              <li>ABOUT</li>
            </a>
            <a href="#sessions">
              <li>SCHEDULE</li>
            </a>
            <a href="#speakers">
              <li>SPEAKERS</li>
            </a>
            <a href="#location">
              <li>LOCATION</li>
            </a>
          </ul>
          <a href="#">
            <button className="purchase-button">GET TICKETS</button>
          </a>
        </div>
      </nav>
    )
  }
}
