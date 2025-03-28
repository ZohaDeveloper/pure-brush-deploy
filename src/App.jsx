import React from 'react'

import Header from './components/Header'
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testinomials';
import InstagramSection from './components/InstagramSection';
import AppearanceSection from './components/AppearanceSection';
import FreshBreathSection from './components/FreshBreathSection';
import ClientsReview from './components/ClientsReview';
import InstagramGallery from './components/InstagramGallery';
import BestSellers from './components/BestSellers';
import SalesSection from './components/SalesSection';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Testimonials/>
    <InstagramSection/>
    <AppearanceSection/>
    <FreshBreathSection/>
    <ClientsReview/>
    <InstagramGallery/>
    <BestSellers/>
    <SalesSection/>
    <Footer/>
    </>
  )
}

export default App
