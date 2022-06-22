import React from "react";
import './App.css';
import BecomePart from "./Components/becomePart/BecomePart";
import Brands from "./Components/brands/Brands";
import Collaboration from "./Components/Collaboration/Collaboration";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Section8 from "./Components/homeSection8/Section8";
import Section9 from "./Components/homeSection9/Section9";
import Navbar from "./Components/navbar/Navbar";
import Story from "./Components/story/Story";
import SuccessStories from "./Components/SuccessStories/SuccessStories";

const App = () => {
  return (
    <div className="body">
      <Navbar/>
      <Header/>
      <Story/>
      <Collaboration/>
      <SuccessStories/>
      <BecomePart/>
      <Brands/>
      <Section8/>
      <Section9/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
