import React from 'react'
import { Nav } from '../components/nav/nav'
import { Header } from '../components/header/header'
import { About } from '../components/about/about'
import { Agenda } from '../components/agenda/agenda'
import { Speakers } from '../components/speakers/speakers'
import Location from '../components/location/location'
import { Footer } from '../components/footer/footer'

const IndexPage = () => (
  <div>
    <Nav />
    <Header />
    <About />
    <Agenda />
    <Speakers />
    <Location />
    <Footer />
  </div>
)

export default IndexPage
