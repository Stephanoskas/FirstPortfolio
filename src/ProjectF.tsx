import { Link } from "react-router-dom";

export default function ProjectF() {
  // ✅ PDF location: my-app/public/pdfs/INTERACTION-ART.pdf
  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/INTERACTION-ART.pdf`;

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
        {/* Με HashRouter το πιο safe είναι να γυρνάμε στο Home */}
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
        This project is presented as a PDF. You can preview it below or open it in a new tab.
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