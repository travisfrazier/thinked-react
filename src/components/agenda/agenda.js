import React from 'react'
import './_agenda.scss'

export const Agenda = () => (
  <section id="sessions" className="timeline-wrapper">
    <h2 className="timeline-title">Schedule</h2>
    <p className="timeline-date">Monday, April 18th, 2019</p>
    <div className="timeline container">
      <div className="timeline-container left">
        <div className="content">
          <h3>9:00 A.M.</h3>
          <p>Check in and breakfast.</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>9:30 A.M.</h3>
          <p>Session One begins / The Origin of Life</p>
        </div>
      </div>
      <div className="timeline-container left">
        <div className="content">
          <h3>10:30 A.M.</h3>
          <p>Session Two begins / Alien Friendship 101</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>Noon</h3>
          <p>Break for lunch... PIZZA!</p>
        </div>
      </div>
      <div className="timeline-container left">
        <div className="content">
          <h3>1:00 P.M.</h3>
          <p>Can we live forever?</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>2:00 P.M.</h3>
          <p>The Future of Planet XC876T</p>
        </div>
      </div>
    </div>
  </section>
)
