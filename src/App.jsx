// eslint-disable-next-line no-unused-vars
import React from 'react';
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hireme from './components/Hireme'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Bot from './components/Bot'

const App = () => {
  return (
    <div className=' min-h-screen bg-gradient-to-t from-gray-900 to-black'>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App