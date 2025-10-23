import Feedback from "./Feedback";

export default function ProjectA() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 40px",
        color: "#92736C",
        gap: "50px",
      }}
    >
      {/* TOP SECTION - Logo + Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Left - Logo */}
        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <img
            src={`${import.meta.env.BASE_URL}images/Logo.png`}
            alt="Project Logo"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "16px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
            }}
          />
        </div>

        {/* Right - Text */}
        <div style={{ flex: "1 1 500px", textAlign: "left" }}>
          <h1 style={{ fontSize: "2.4rem", marginBottom: "20px" }}>Project A</h1>
          <p style={{ lineHeight: "1.7", fontSize: "1.2rem" }}>
            Our team of three developed a fully functional website using HTML, CSS, and JavaScript
            as part of a collaborative project with Wargaming, focusing on their title World of Tanks.
            The primary objective of the project was to re-engage former players who had stopped playing
            the game by offering an interactive and visually appealing platform. The website includes key
            sections such as a Home page, a Leaderboard showcasing player rankings, a Tank Collection
            displaying detailed vehicle information, and a Rewards section designed to incentivize player
            return and participation. Overall, the project aimed to enhance user engagement and community
            interaction through a modern, game-themed web experience consistent with Wargaming’s brand identity.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION - 4 Large Images */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/Home.jpg`}
          alt="Home page"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
        <img
          src={`${import.meta.env.BASE_URL}images/Leader.jpg`}
          alt="Leaderboard page"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
        <img
          src={`${import.meta.env.BASE_URL}images/Rewards.jpg`}
          alt="Rewards page"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
        <img
          src={`${import.meta.env.BASE_URL}images/Tanks.jpg`}
          alt="Tanks collection page"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* Like + Comments */}
      <Feedback projectId="project-a" />
    </section>
  );
}
