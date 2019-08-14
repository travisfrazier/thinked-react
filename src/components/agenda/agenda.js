import React from 'react'
import './_agenda.scss'

export const Agenda = () => (
  <section id="sessions" className="timeline-wrapper">
    <h2 className="timeline-title">Schedule</h2>
    <p className="timeline-date">Fri, Sep 20th</p>
    <div className="timeline container timeline-one">
      <div className="timeline-container left">
        <div className="content">
          <h3>5:00 P.M.</h3>
          <p>CHECK-IN</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>6:00 P.M.</h3>
          <p>Service with Far-Flung Tin Can and Sharo Ramkhelawan</p>
        </div>
      </div>
      <div className="timeline-container left">
        <div className="content">
          <h3>9:00 P.M.</h3>
          <p>Post Service Hangout</p>
        </div>
      </div>
    </div>
    <p className="timeline-date">Sat, Sep 21st</p>
    <div className="timeline container">
      <div className="timeline-container right">
        <div className="content">
          <h3>9:00 A.M.</h3>
          <p>Service with Far-Flung Tin Can and Kyle Philippi</p>
        </div>
      </div>
      <div className="timeline-container left">
        <div className="content">
          <h3>10:30 A.M.</h3>
          <p>Workshops</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>Noon</h3>
          <p>Lunch Break</p>
        </div>
      </div>
      <div className="timeline-container left">
        <div className="content">
          <h3>2:00 P.M.</h3>
          <p>Workshops/Panels</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>3:30 P.M.</h3>
          <p>Premiere of "Far-Flung: Amazon Special" with light refrehsments</p>
        </div>
      </div>
      <div className="timeline-container left">
        <div className="content">
          <h3>5:00 P.M.</h3>
          <p>Service with Far-Flung Tin Can and Deven Wallace</p>
        </div>
      </div>
    </div>
  </section>
)
