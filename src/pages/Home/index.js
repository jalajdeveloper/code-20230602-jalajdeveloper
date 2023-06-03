import React from "react";
import Hero from "../../components/Hero";
import { ExploreSection } from "../../components/Explore";
import { AboutSection } from "../../components/about";

function Home() {
  const handleMenuClick = (event) => {
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div role='homecontainer'>
      <Hero />
      <ExploreSection />
      <AboutSection />
    </div>
  );
}

export default Home;
