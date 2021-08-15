import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import History from "./education/History";
import Footer from "./footer/Footer";
import loading from './assets/SVG/loading.svg';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);;
  }, []);


  if (isLoading) {
    return <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <img src={loading} alt="" />
    </div>;
  }
  
  return (
    <React.Fragment>
      <Header />
      <About />
      <Skills />
      <History />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
