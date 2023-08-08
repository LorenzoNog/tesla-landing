import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { SectionItems } from "./data.js";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto">
        <div className="snap-center">
          <HeroSection />
        </div>
        {SectionItems.map((section) => {
          const { id, title, src, subtitle, bt1, btn2 } = section;
          return (
            <div key={id} className="snap-center">
              <Section
                title={title}
                subtitle={subtitle}
                img={src}
                btn1={bt1}
                btn2={btn2}
              />
              <Footer styles='mb-5 flex items-center fixed bottom-0 w-full z-40 justify-center gap-10 text-white'/>
            </div>
          );
        })}
        {/* <div className="snap-center">
          <Section title='Model 3' subtitle='Starting at $32,740' img='/model3.avif' btn1='Explore inventory' btn2='Custom order'/>
        </div>
        <div className="snap-center">
          <Section title='Model Y' subtitle='Starting at $40,240' img='/modely.avif' btn1='Explore inventory' btn2='Custom order'/>
        </div>
        <div className="snap-center">
          <Section title='Model S' subtitle='Explore Inventory' img='/modelS.avif' btn1='Custom order' btn2='Demo Drive'/>
        </div>
        <div className="snap-center">
          <Section title='Model X' subtitle='Explore Inventory' img='/modelX.avif' btn1='Custom order' btn2='Demo Drive' />
        </div>
        <div className="snap-center">
          <Section title='Solar Panels' subtitle='Schedule a Virtual Consultation' img='solarPanel.avif' btn1='Order Now' btn2='Learn More'/>
        </div>
        <div className="snap-center">
          <Section title='Solar Roof' subtitle='Produce Clean Energy From Your Roof ' img='solarRoof.avif' btn1='Order Now' btn2='Learn More'/>
        </div>
        <div className="snap-center">
          <Section title='Powerwall' img='powerwall.avif' btn1='Order Now' btn2='Learn More'/>
        </div>
        <div className="snap-center" id="lastSection">
          <Section title='Accessories' img='accessories.avif' btn1='Order Now' btn2='Learn More'/>
          <Footer styles={'mb-5 flex items-center fixed bottom-0 w-full z-40 justify-center gap-10 text-white'}/>
        </div> */}
      </main>
    </>
  );
};

export default App;
