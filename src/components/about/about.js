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
        <h3>Description</h3>
        <p>God is calling. It's time to run the path He has set, wherever He may lead you. 
          The Mission field is calling more to go and more to support. Maybe you're considering 
          one of the two? EMANATE is the weekend where you venture to a deeper place in God. 
          Let's find where you fit in changing the world! These two days are full of worship 
          from Far-Flung Tin Can and guest speakers Deven Wallace and Sharo Ramkhelawan in 3 
          powerful services. We also have workshops, panel discussions, times to connect with 
          the Far-Flung team, as well as the premiere of our Far-Flung Amazon Special.</p>
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
