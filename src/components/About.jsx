import profileImg from "../assets/profile.png";

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">
        About <span>Me</span>
      </h2>
      <div className="about-image-wrapper">
        <div className="circle"></div>
        <img src={profileImg} alt="profile" />
      </div>
      <h3 className="about-subtitle">
        Hi there! Glad to see you here.
      </h3>
      <p className="about-text">
        I'm Jennifer, a First Class BSc Economics graduate from Delta State University,
        Abraka, and a self-taught iOS and React Native developer. I specialize in building
        cross-platform mobile applications that are intuitive, performant, and
        production-ready. My most notable work is <strong>FlashyPay</strong> — a
        mobile wallet I built for FXSwap, delivering a seamless digital payment
        experience to real users. I bring a rare combination of rigorous analytical
        thinking from my first class degree and hands-on engineering from my development
        practice, allowing me to build products that are both technically sound and
        business-aware.
      </p>
      <button
        className="about-btn"
        onClick={() =>
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact Me
      </button>
    </section>
  );
}