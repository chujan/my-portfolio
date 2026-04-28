import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Jennifer</span>
        </h1>
        <h2 className="role">
          <TypeAnimation
            sequence={[
              "iOS Developer",
              2000,
              "React Native Developer",
              2000,
              "Mobile App Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
          <span className="cursor">|</span>
        </h2>
        <p>
          First Class Economics graduate turned mobile developer. I build
          cross-platform iOS and Android apps that are fast, elegant, and
          production-ready.
        </p>
        <div className="buttons">
          <button
            className="btn primary"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me
          </button>
          <button
            className="btn secondary"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Talk
          </button>
        </div>
        <div className="socials">
          <div className="icon">
            <a href="https://github.com/chujan?tab=repositories" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/chujan" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}