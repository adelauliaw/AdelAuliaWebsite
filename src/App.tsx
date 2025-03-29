import React from "react";
import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import Features from "./sections/Features.tsx";
import Pricing from "./sections/Pricing.tsx";
import Faq from "./sections/Faq.tsx";
import Download from "./sections/Download.tsx";
import Footer from "./sections/Footer.tsx";
import FancySplash from "./components/FancySplash.tsx";


const App = () => {
  return (
    <main
      className="
        overflow-hidden 
        min-h-screen
        bg-[linear-gradient(180deg,#000000_0%,#222222_30%,#0c0c59_60%,#81d4fa_100%)]
      "
    >
      <FancySplash />
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Download />
      <Footer />
    </main>
  );
};

export default App;

