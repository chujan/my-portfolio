



import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Education from "./components/Journey";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Education/>
      <Skills/>
       <Projects />
      <Contact/>
      <Footer/>
     
    </>
  );
}