import React from 'react'
import Count from '../count/count'
import './_about.scss'

export const About = () => (
  <section id="about" className="about">
    <div className="container about-container">
      <div className="about-one">
        <h2>How Can I Make the Greatest Impact in Far Away Places?</h2>
        <p>
          We’re inviting you to join us for Emanate Summit 2019, a missions
          summit from Far-Flung Tin Can, in beautiful Chattanooga.
        </p>
        <h3>What You Can Expect</h3>
        <ul>
          <li>
            Latest information and thought leadership from the Far-Flung Tin Can
            team.
          </li>
          <li>
            Interactive training from real missionaries from all over the World.
          </li>
          <li>
            Opportunities to lean about upcoming Far-Flung Air trips and how to
            be a part.
          </li>
          <li>Group outreach projects and nightly services.</li>
        </ul>
      </div>
      <div className="about-two">
        <h2>Join Us</h2>
        <a
          href="https://www.eventbrite.com/o/far-flung-tin-can-10929829971"
          target="_blank"
        >
          <button className="main-button">REGISTER</button>
        </a>
        <Count />
        <iframe
          //width="560"
          //height="315"
          src="https://www.youtube.com/embed/vdugb6T1Gms"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </section>
)
