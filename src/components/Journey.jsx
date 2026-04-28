const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="3" width="14" height="12" rx="2" stroke="#00aaff" strokeWidth="1.3"/>
    <line x1="5" y1="1" x2="5" y2="5" stroke="#00aaff" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="11" y1="1" x2="11" y2="5" stroke="#00aaff" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="1" y1="7" x2="15" y2="7" stroke="#00aaff" strokeWidth="1.3"/>
  </svg>
);

const educationItems = [
  {
    date: "2019 - 2023",
    title: "BSc Economics — First Class",
    desc: "Bachelor of Science in Economics from Delta State University, Abraka. Graduated with First Class Honours.",
  },
  {
    date: "2020 - 2021",
    title: "iOS & React Native — Udemy",
    desc: "Completed an intensive bootcamp focused on iOS development and React Native for cross-platform mobile applications.",
  },
];

const experienceItems = [
  {
    date: "2024 - 2025",
    title: "Mobile Developer — FlashyPay (FXSwap)",
    desc: "Built FlashyPay, a mobile wallet for FXSwap, enabling seamless digital payments and foreign exchange transactions for real users.",
  },
  {
    date: "2025 - 2026",
    title: "Mobile Developer — SimpliRide",
    desc: "Contributed to SimpliRide, a rider booking app, by integrating Google Maps for real-time location tracking and seamless ride booking experiences.",
  },
  {
    date: "2026 - Present",
    title: "Mobile Developer — StudyVault",
    desc: "Currently building StudyVault, an all-in-one student app featuring past questions, brain games, and skill learning modules for African students.",
  },
];

const TimelineCard = ({ date, title, desc }) => (
  <div className="timeline-card">
    <div className="timeline-dot" />
    <div className="card-date">
      <CalendarIcon />
      {date}
    </div>
    <div className="card-title">{title}</div>
    <div className="card-desc">{desc}</div>
  </div>
);

export default function Education() {
  return (
    <section className="journey-section" id="journey">
      <h1 className="journey-title">
        My <span>Journey</span>
      </h1>
      <div className="journey-grid">
        <div className="journey-col">
          <h2>Education</h2>
          <div className="timeline">
            {educationItems.map((item, i) => (
              <TimelineCard key={i} {...item} />
            ))}
          </div>
        </div>
        <div className="journey-col">
          <h2>Experience</h2>
          <div className="timeline">
            {experienceItems.map((item, i) => (
              <TimelineCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}