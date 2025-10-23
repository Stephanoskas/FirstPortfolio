export default function ProjectB() {
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
            src="/images/icn.png"
            alt="Project Logo"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "16px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
            }}
          />
        </div>

        {/* Right - Text */}
        <div style={{ flex: "1 1 500px", textAlign: "left" }}>
          <h1 style={{ fontSize: "2.4rem", marginBottom: "20px" }}>Project A</h1>
          <p style={{ lineHeight: "1.7", fontSize: "1.2rem" }}>
           I designed a logo, business card, and website layout for the Independent Cyprus Network, focusing on establishing a strong and cohesive visual identity.

The project aimed to create a modern and trustworthy brand presence that
 reflects the organization’s independent and professional ethos. The logo
design emphasizes clarity and symbolism relevant to Cyprus, while the business 
card maintains a clean and professional aesthetic for both digital and print use.
The accompanying web design ensures user-friendly navigation, 
consistent branding, and a responsive interface, effectively communicating 
the network’s values and purpose to its audience.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION - 3 Large Images */}
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
          src="/images/web.png"
          alt="Home"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
        <img
          src="/images/cardf.png"
          alt="Leader"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
        <img
          src="/images/cardb.png"
          alt="Rewards"
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          }}
        />
      </div>
    </section>
  );
}
