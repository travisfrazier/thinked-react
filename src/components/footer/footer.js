import React from 'react'
import './_footer.scss'

export const Footer = () => (
  <footer>
    <div className="footer-container">
      <img
        className="katana-logo"
        src={require('../../images/far-flung-logo.png')}
      />
      <h2>Join Us</h2>
      <a
        href="https://www.eventbrite.com/e/emanate-a-missions-summit-tickets-63389774522"
        target="_blank"
      >
        <button className="main-button">REGISTER</button>
      </a>
    </div>
  </footer>
)
