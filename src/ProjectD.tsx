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
            src="/images/top.png"
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
          <h1 style={{ fontSize: "2.4rem", marginBottom: "20px" }}>Project A</h1>
          <p style={{ lineHeight: "1.7", fontSize: "1.2rem" }}>
            Περιγραφή του Project A. Εδώ μπορείς να εξηγήσεις τη διαδικασία, τα
            εργαλεία που χρησιμοποίησες και το τελικό αποτέλεσμα. Μπορείς να
            συμπεριλάβεις επίσης λεπτομέρειες για τη σχεδίαση, την ανάπτυξη και
            τις προκλήσεις που αντιμετώπισες κατά τη διάρκεια του project.
          </p>
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          justifyContent: "center",
        }}
      >
         <img
            src="/images/btm.png"
            alt="Project Illustration"
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
