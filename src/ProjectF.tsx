import { Link } from "react-router-dom";

export default function ProjectF() {
  // PDF
  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/INTERACTION-ART.pdf`;

  // Video
  const videoUrl = `${import.meta.env.BASE_URL}videos/Interactive_Algorithmic_Soundscape_Performance_25394525.mp4`;

  return (
    <div
      style={{
        padding: "40px 16px",
        maxWidth: "1100px",
        margin: "0 auto",
        color: "#92736C",
      }}
    >
      <div style={{ marginBottom: "18px" }}>
        <Link
          to="/"
          style={{
            color: "#92736C",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Back to Home
        </Link>
      </div>

      <h1 style={{ marginBottom: "10px", fontSize: "2.2rem" }}>Project F</h1>

      <p style={{ marginBottom: "18px", lineHeight: 1.6, opacity: 0.9 }}>
        Interactive Algorithmic Soundscape Performance. The video below shows the live
        performance of the rule-based sound system implemented in Processing.
      </p>

      {/* VIDEO */}
      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
          background: "#000",
          marginBottom: "28px",
        }}
      >
        <video
          controls
          style={{ width: "100%", display: "block" }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p style={{ marginBottom: "18px", lineHeight: 1.6, opacity: 0.9 }}>
        This project is also documented in the following PDF report.
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "18px" }}>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#92736C",
            color: "white",
            padding: "10px 14px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Open PDF in new tab
        </a>

        <a
          href={pdfUrl}
          download
          style={{
            border: "2px solid #92736C",
            color: "#92736C",
            padding: "8px 14px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Download PDF
        </a>
      </div>

      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
          background: "#fff",
        }}
      >
        <iframe
          src={pdfUrl}
          title="Project F PDF"
          style={{ width: "100%", height: "80vh", border: "none" }}
        />
      </div>
    </div>
  );
}