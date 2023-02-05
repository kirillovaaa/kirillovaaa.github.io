import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => (
  <div className="App">
    <Header location="Yerevan 🍗" />
    <Section>
      <h1>Creative Developer</h1>
    </Section>
    <Section>
      <h2>My Work</h2>
    </Section>
    <Section>
      <h2>Contact</h2>
    </Section>
  </div>
);

export default App;
