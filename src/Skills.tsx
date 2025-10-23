export default function Skills() {
  const skills = [
    { name: "Illustrator", icon: "images/illustrator.png", level: 90 },
    { name: "Photoshop",  icon: "images/photoshop.png",  level: 80 },
    { name: "Figma",      icon: "images/figma.png",      level: 70 },
    { name: "Maya",       icon: "images/maya.png",       level: 70 },
    { name: "VS Code",    icon: "images/vscode.png",     level: 60 },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#FDF1F5",
        color: "#92736C",
        textAlign: "center",
      }}
    >
      <h2>My Skills</h2>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill) => {
          const radius = 50;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (skill.level / 100) * circumference;

          return (
            <div
              key={skill.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div style={{ position: "relative", width: "120px", height: "120px" }}>
                <svg width="120" height="120">
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#e0d4d1"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#92736C"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 1s ease" }}
                  />
                </svg>

                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "50px",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
