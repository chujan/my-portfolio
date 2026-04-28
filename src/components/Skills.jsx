const codingSkills = [
  { name: "React Native", level: 85 },
  { name: "iOS Development", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "Google Maps API", level: 70 },
  { name: "Firebase", level: 75 },
  { name: "REST API", level: 80 },
];

const professionalSkills = [
  { name: "Mobile App Development", level: 85 },
  { name: "UI/UX Design", level: 70 },
  { name: "Problem Solving", level: 90 },
  { name: "Financial Technology", level: 75 },
];

const SkillBar = ({ name, level }) => (
  <div className="skill-item">
    <div className="skill-header">
      <span className="skill-name">{name}</span>
      <span className="skill-percent">{level}%</span>
    </div>
    <div className="skill-track">
      <div className="skill-fill" style={{ width: `${level}%` }} />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h1 className="journey-title">
        My <span>Skills</span>
      </h1>
      <div className="skills-grid">
        <div className="skills-col">
          <h2>Coding Skills</h2>
          <div className="skills-card">
            {codingSkills.map((skill, i) => (
              <SkillBar key={i} {...skill} />
            ))}
          </div>
        </div>
        <div className="skills-col">
          <h2>Professional Skills</h2>
          <div className="skills-card">
            {professionalSkills.map((skill, i) => (
              <SkillBar key={i} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}