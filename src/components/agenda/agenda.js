import React from 'react'
import './_agenda.scss'

export const Agenda = () => (
  <section id="sessions" className="timeline-wrapper">
    <h2 className="timeline-title">Schedule</h2>
    <p className="timeline-date">Fri, Sep 20th - Sat, Sep 21st</p>
    <div className="timeline container">
      <div className="timeline-container left">
        <div className="content">
          <h3>9:00 A.M.</h3>
          <p>Registration and Breakfast</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>9:30 A.M.</h3>
          <p>Session One / Details Soon...</p>
        </div>
      </div>
      <div className="timeline-container left">
        <div className="content">
          <h3>10:30 A.M.</h3>
          <p>Break Out One / Details Soon...</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>Noon</h3>
          <p>Break for lunch</p>
        </div>
      </div>
      <div className="timeline-container left">
        <div className="content">
          <h3>1:00 P.M.</h3>
          <p>Session Two / Details soon...</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>2:30 P.M.</h3>
          <p>Gathering at the River / Details soon...</p>
        </div>
      </div>
    </div>
  </section>
)
