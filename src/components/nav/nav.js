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
        <div onClick={this.toggleMenu} className="mobile-menu">
          <div />
          <div />
          <div />
        </div>
        <div
          className={
            this.state.showMenu
              ? 'show container nav-container'
              : 'container nav-container'
          }
        >
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
          <a
            href="https://www.eventbrite.com/e/emanate-a-missions-summit-tickets-63389774522"
            target="_blank"
          >
            <button className="purchase-button">GET REGISTERED</button>
          </a>
        </div>
      </nav>
    )
  }
}
