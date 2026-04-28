export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">JENNIFER</div>
      <div className="nav-links">
        <a href="#" onClick={() => scrollTo("hero")}>Home</a>
        <a href="#" onClick={() => scrollTo("about")}>About</a>
        <a href="#" onClick={() => scrollTo("journey")}>Education</a>
        <a href="#" onClick={() => scrollTo("skills")}>Skills</a>
        <a href="#" onClick={() => scrollTo("contact")}>Contact</a>
      </div>
    </nav>
  );
}