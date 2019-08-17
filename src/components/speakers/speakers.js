import React from 'react'
import './_speakers.scss'

export const Speakers = () => (
  <section id="speakers" className="speakers-wrapper">
    <div className="container">
      <h2>Speakers</h2>
      <div className="speakers">
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/one.jpg')}
          />
          <figcaption>
            Devin Wallace 
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/two.jpg')}
          />
          <figcaption>
            Sharo Ramkhelawan
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/three.jpg')}
          />
          <figcaption>
            Kyle Phillippi
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
)
