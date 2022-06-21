import React from "react";
import './App.css';
import Collaboration from "./Components/Collaboration/Collaboration";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";
import Story from "./Components/story/Story";

const App = () => {
  return (
    <div className="body">
      <Navbar/>
      <Header/>
      <Story/>
      <Collaboration/>
    </div>
  );
};

export default App;
