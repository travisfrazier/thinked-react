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
            src={require('../../images/speaker-one.png')}
          />
          <figcaption>
            Corey Zalewski | Director of Lunar Studies <br />
            <span className="speaker-info">Katana Media</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-three.png')}
          />
          <figcaption>
            Lindsey Frank | Chief Astronomer <br />
            <span className="speaker-info">Katana Media</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-six.png')}
          />
          <figcaption>
            Chris Dyer | Alien Linguist <br />
            <span className="speaker-info">Katana Media</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-five.png')}
          />
          <figcaption>
            Melissa Lopez | Lead Aeronautical Engineer <br />
            <span className="speaker-info">Katana Media</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-two.png')}
          />
          <figcaption>
            Andreas Roell | Director of Astrophysics <br />
            <span className="speaker-info">Katana Media</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-four.png')}
          />
          <figcaption>
            JJ Bannasch | Former Astronaut <br />
            <span className="speaker-info">Katana Media</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
)
