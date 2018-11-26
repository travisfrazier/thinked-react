import React from 'react'
import Count from '../count/count'
import './_about.scss'

export const About = () => (
  <section id="about" className="about">
    <div className="container about-container">
      <div className="about-one">
        <h2>
          How Can Universities Turn Online Lead Generation Into Enrollments?
        </h2>
        <p>
          We’re inviting you to join us for the Think Ed Summit 2019, an all-day
          summit from Google and Katana, in sunny San Diego.
        </p>
        <h3>What You Can Expect</h3>
        <ul>
          <li>
            Latest information and thought leadership from Google's higher
            education and technology team.
          </li>
          <li>
            Interactive hands-on sessions to discuss strategies and challenges
            you face.
          </li>
          <li>
            Access to full-version of Higher Education industry benchmark study
            to identify how you compare to similar institutions.
          </li>
          <li>
            Establish new relationships with other Higher Ed marketers via our
            networking sessions.
          </li>
        </ul>
      </div>
      <div className="about-two">
        <h2>Join Us</h2>
        <a href="#">
          <button className="main-button">GET TICKETS</button>
        </a>
        <Count />
        <iframe
          //width="560"
          //height="315"
          src="https://www.youtube.com/embed/G-mF4R_ENwA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </section>
)
