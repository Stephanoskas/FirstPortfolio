import Feedback from "./Feedback";

export default function ProjectC() {
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
            src={`${import.meta.env.BASE_URL}images/100.png`}
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
          <h1 style={{ fontSize: "2.4rem", marginBottom: "20px" }}>Project C</h1>
          <p style={{ lineHeight: "1.7", fontSize: "1.2rem" }}>
            I designed a commemorative logo and a set of home and away kits for APOEL FC
            Nicosia in celebration of the club’s 100-year anniversary. The project aimed to
            honor APOEL’s rich history and heritage while introducing a modern visual identity
            that resonates with both long-time supporters and new generations. The anniversary
            logo incorporates symbolic elements from the club’s legacy, blending tradition with
            a contemporary design approach. The kit designs reflect the team’s iconic colors
            and pride, featuring refined details and textures that pay tribute to a century
            of sporting excellence and unity.
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
          src={`${import.meta.env.BASE_URL}images/HF.jpg`}
          alt="Home Kit Front"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
        <img
          src={`${import.meta.env.BASE_URL}images/HB.jpg`}
          alt="Home Kit Back"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
        <img
          src={`${import.meta.env.BASE_URL}images/AF.jpg`}
          alt="Away Kit Front"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
        <img
          src={`${import.meta.env.BASE_URL}images/AB.jpg`}
          alt="Away Kit Back"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* Like + Comment Section */}
      <Feedback projectId="project-c" />
    </section>
  );
}
