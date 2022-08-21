import React from 'react'
import Carousel from './components/Carousel'
import { Data } from './components/Data'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Section from './components/Section'
import SmallSection from './components/SmallSection'

const Home = () => {
  return (
    <div>
         <Header/>
        <Section/>
        <SmallSection/>
        <Main/>
        <Carousel slides={Data}/>
        <Footer/>
    </div>
  )
}

export default Home