import React from "react";
import "./App.css";
import Top from "./components/Top";
import Header from "./components/Header";
import Target from "./components/Target";
import Grow from "./components/Grow";
import Conversations from "./components/Conversations";
import Users from "./components/Users";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <Target />
      <Grow />
      <Conversations />
      <Users />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
