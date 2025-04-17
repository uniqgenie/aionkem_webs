import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <HeroSection />
    <Footer />
  </div>
);

export default App;
