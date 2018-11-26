import React from 'react'
import './_header.scss'

export const Header = () => (
  <header>
    <div className="container header-container">
      <p className="header-top-text">Google + Katana Present</p>
      <h1>
        <img className="think" src={require('../../images/newlogo.png')} />
      </h1>
      <p className="header-sub-title">
        Make 2019 a Success with Expert Digital Campaign Strategies for Higher
        Enrollments
      </p>
      <a href="#">
        <button className="main-button">GET TICKETS</button>
      </a>
      <p className="header-date">Monday, April 18th, 2019 | San Diego, CA</p>
      <p className="header-text">Special guests from</p>
      <div className="header-logos">
        <img className="google-logo" src={require('../../images/google.png')} />
        <img className="katana-logo" src={require('../../images/katana.png')} />
      </div>
    </div>
  </header>
)
