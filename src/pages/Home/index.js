import React from "react";
import Hero from "../../components/Hero";
import { ExploreSection } from "../../components/Explore";
import { AboutSection } from "../../components/about";

function Home() {
  return (
    <div role='homecontainer'>
      <Hero />
      <ExploreSection />
      <AboutSection />
    </div>
  );
}

export default Home;
