import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">JENNIFER</div>

      {/* Desktop links */}
      <div className="nav-links">
        <a href="#" onClick={() => scrollTo("hero")}>Home</a>
        <a href="#" onClick={() => scrollTo("about")}>About</a>
        <a href="#" onClick={() => scrollTo("journey")}>Education</a>
        <a href="#" onClick={() => scrollTo("skills")}>Skills</a>
        <a href="#" onClick={() => scrollTo("contact")}>Contact</a>
        <a href="#" onClick={() => scrollTo("projects")}>Projects</a>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <a href="#" onClick={() => scrollTo("hero")}>Home</a>
        <a href="#" onClick={() => scrollTo("about")}>About</a>
        <a href="#" onClick={() => scrollTo("journey")}>Education</a>
        <a href="#" onClick={() => scrollTo("skills")}>Skills</a>
        <a href="#" onClick={() => scrollTo("contact")}>Contact</a>
      </div>
    </nav>
  );
}