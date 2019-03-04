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
            Kyle Phillippi | President and CEO <br />
            <span className="speaker-info">Far-Flung Tin Can</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-five.png')}
          />
          <figcaption>
            Chris Barker | COO and Fiance <br />
            <span className="speaker-info">Far-Flung Tin Can</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-six.png')}
          />
          <figcaption>
            Jonathan Etienne | Music Director <br />
            <span className="speaker-info">Free Chapel</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-three.png')}
          />
          <figcaption>
            Marion Phillippi | Translator <br />
            <span className="speaker-info">Far-Flung Tin Can</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-two.png')}
          />
          <figcaption>
            Jeremy Caruthers | Composer <br />
            <span className="speaker-info">Imagind Audio</span>
          </figcaption>
        </figure>
        <figure>
          <img
            className="speaker-image"
            src={require('../../images/speaker-four.png')}
          />
          <figcaption>
            Pauline Howard | Photographer <br />
            <span className="speaker-info">Pauline Howard LLC</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
)
