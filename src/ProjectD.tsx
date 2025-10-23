export default function ProjectD() {
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
      {/* TOP SECTION - Image + Text */}
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
        {/* Left - Image */}
        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <img
            src={`${import.meta.env.BASE_URL}images/top.png`}
            alt="Project Illustration"
            style={{
              width: "100%",
              maxWidth: "250px",
              borderRadius: "16px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
            }}
          />
        </div>

        {/* Right - Text */}
        <div style={{ flex: "1 1 500px", textAlign: "left" }}>
          <h1 style={{ fontSize: "2.4rem", marginBottom: "20px" }}>Project D</h1>
          <p style={{ lineHeight: "1.7", fontSize: "1.2rem" }}>
            I designed three distinct logo concepts for the ICCA (International Congress and 
            Convention Association) event hosted in Cyprus, working independently under the guidance 
            of my supervisor. Each logo explored a different creative direction while maintaining a 
            consistent focus on the event’s core identity. The designs were inspired by two key themes
             — Cyprus, representing the island’s cultural and geographical identity, and tuna, symbolizing 
             the region’s marine life and sustainability values. Through this project, I aimed to visually
              merge tradition and nature with modern, professional aesthetics, creating logos that reflect
               both local character and international significance.
          </p>
        </div>
      </div>

      {/* BOTTOM IMAGE SECTION */}
      <div
        style={{
          marginTop: "70px",
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/btm.png`}
          alt="Project Illustration Bottom"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
      </div>
    </section>
  );
}
