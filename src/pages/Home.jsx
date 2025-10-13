import React from 'react'
import "../temple.css";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Featuressection";
import Temple from "../components/templecard";
import Testimonial from "../components/testimonial";
const Home = () => {
  return (
   <div className="main-layout">
      {/* <Header /> */}
        <HeroSection />
     <Temple/>
     <Features/>
     <Testimonial/> 
     {/* <Footer/> */}
    </div>
  )
}

export default Home