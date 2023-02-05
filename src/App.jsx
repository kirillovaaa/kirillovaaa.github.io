import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Section from "./components/Section";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => (
  <div>
    <Header location="Yerevan 🍗" />
    <main>
      <Section>
        <h1>Creative Developer</h1>
        <About />
      </Section>

      <Section>
        <h2>My Work</h2>
      </Section>

      <Section>
        <h2>Contact</h2>
        <Contact />
      </Section>
    </main>
  </div>
);

export default App;
