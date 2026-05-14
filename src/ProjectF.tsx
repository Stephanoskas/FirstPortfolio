import { Link } from "react-router-dom";

export default function ProjectF() {
  // PDF
  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/INTERACTION-ART.pdf`;

  // Main Video
  const videoUrl = `${import.meta.env.BASE_URL}videos/Interactive_Algorithmic_Soundscape_Performance_25394525.mp4`;

  // Reflective Video
  const reflectiveVideoUrl = `${import.meta.env.BASE_URL}videos/0326.mp4`;

  // Sculpture PDF
  const sculpturePdfUrl = `${import.meta.env.BASE_URL}pdfs/reportroisin.pdf`;

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

      <h1 style={{ marginBottom: "10px", fontSize: "2.2rem" }}>
        Project F
      </h1>

      <p style={{ marginBottom: "18px", lineHeight: 1.6, opacity: 0.9 }}>
        Interactive Algorithmic Soundscape Performance. The video below shows the live
        performance of the rule-based sound system implemented in Processing.
      </p>

      {/* MAIN VIDEO */}
      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
          background: "#000",
          marginBottom: "28px",
        }}
      >
        <video controls style={{ width: "100%", display: "block" }}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* REFLECTIVE VIDEO TITLE */}
      <h2 style={{ marginBottom: "10px", fontSize: "1.6rem" }}>
        Reflective Piece Video
      </h2>

      {/* REFLECTIVE VIDEO */}
      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
          background: "#000",
          marginBottom: "28px",
        }}
      >
        <video controls style={{ width: "100%", display: "block" }}>
          <source src={reflectiveVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* MODULAR SCULPTURE SECTION */}
      <h2 style={{ marginBottom: "10px", fontSize: "1.6rem" }}>
        Modular and Interactive Sculpture
      </h2>

      <p style={{ marginBottom: "18px", lineHeight: 1.6, opacity: 0.9 }}>
        Documentation and video presentation of the modular and interactive
        sculpture project.
      </p>

      {/* YOUTUBE VIDEO */}
      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
          background: "#000",
          marginBottom: "28px",
        }}
      >
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/Akya3AKYsmc"
          title="Modular and Interactive Sculpture"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: "block" }}
        />
      </div>

      {/* SCULPTURE PDF */}
      <p style={{ marginBottom: "18px", lineHeight: 1.6, opacity: 0.9 }}>
        The full project report can be viewed below.
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "18px",
        }}
      >
        <a
          href={sculpturePdfUrl}
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
          Open Sculpture PDF in new tab
        </a>

        <a
          href={sculpturePdfUrl}
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
          Download Sculpture PDF
        </a>
      </div>

      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
          background: "#fff",
          marginBottom: "28px",
        }}
      >
        <iframe
          src={sculpturePdfUrl}
          title="Modular and Interactive Sculpture PDF"
          style={{ width: "100%", height: "80vh", border: "none" }}
        />
      </div>

      <p style={{ marginBottom: "18px", lineHeight: 1.6, opacity: 0.9 }}>
        This project is also documented in the following PDF report.
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "18px",
        }}
      >
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