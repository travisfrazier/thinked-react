import React from 'react'
import './_footer.scss'

export const Footer = () => (
  <footer>
    <div className="footer-container">
      <img
        className="katana-logo"
        src={require('../../images/katana-black.png')}
      />
      <h2>Join Us</h2>
      <a href="#">
        <button className="main-button">GET TICKETS</button>
      </a>
    </div>
  </footer>
)
