import React from "react";
import './App.css';
import BecomePart from "./Components/becomePart/BecomePart";
import Brands from "./Components/brands/Brands";
import Collaboration from "./Components/Collaboration/Collaboration";
import Header from "./Components/header/Header";
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
    </div>
  );
};

export default App;
