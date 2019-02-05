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
          <p>Check in information goes here.</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>9:30 A.M.</h3>
          <p>Session One begins / Add session text</p>
        </div>
      </div>
      <div className="timeline-container left">
        <div className="content">
          <h3>10:30 A.M.</h3>
          <p>Session Two begins / Session two text here.</p>
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
          <p>Add text here for afternoon.</p>
        </div>
      </div>
      <div className="timeline-container right">
        <div className="content">
          <h3>2:00 P.M.</h3>
          <p>More text in relatin to the end</p>
        </div>
      </div>
    </div>
  </section>
)
