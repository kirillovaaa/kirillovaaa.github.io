import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Section from "./components/Section";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work";

const App = () => (
  <div>
    <Header location="Yerevan 🍗" />
    <main>
      <Section id="main">
        <h1>Creative Developer</h1>
        <About />
      </Section>

      <Section id="work">
        <h2>My Work</h2>
        <Work />
      </Section>

      <Section id="contact">
        <h2>Contact</h2>
        <Contact />
      </Section>
    </main>
  </div>
);

export default App;
