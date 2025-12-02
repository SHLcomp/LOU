import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import Hero from '../components/hero2/Hero'
import { Services } from '../components/services/Services'
import Projects from '../components/projects/Projects'
import Why from '../components/whyus/Why'
import ShortAU from '../components/shortAU/ShortAU'
import ContactForm from '../components/contactForm/ContactForm'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import Footer from '../components/footer/Footer'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ShortAU />
        <Services />
        <Why />
        <Projects />
        <ContactForm />
        <ContactInfo/>
        <Footer />
    </div>
  )
}
export default Home