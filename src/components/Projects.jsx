import flashypay from "../assets/flashpay.png";
import simpliride from "../assets/simpliride.png";
import studyvault from "../assets/study.png";

const projects = [
  {
    title: "FlashyPay",
    image: flashypay,
    desc: "A mobile wallet built for FXSwap, enabling seamless digital payments and foreign exchange transactions for real users.",
    tags: ["Swift", "Firebase", "FinTech"],
    github: "https://github.com/chujan/FlashPay",
    live: "https://www.linkedin.com/feed/update/urn:li:activity:7240835546334265346/",
  },

  {
    title: "SimpliRide",
    image: simpliride,
    desc: "A rider booking app with Google Maps integration for real-time location tracking and seamless ride booking experiences.",
    tags: ["React Native", "Google Maps", "Firebase"],
    github: "https://github.com/chujan/simplified-rider-app",
    live: "#",
  },
  {
    title: "StudyVault",
    image: studyvault,
    desc: "An all-in-one student app for African students featuring past questions, brain games and skill learning modules.",
    tags: ["React Native", "Firebase", "EdTech"],
    github: "https://github.com/chujan/Studyvault",
    live: "https://www.linkedin.com/feed/update/urn:li:activity:7424160736462958592/",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h1 className="journey-title">
        My <span>Projects</span>
      </h1>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span className="project-tag" key={j}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-btn github">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="project-btn live">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}