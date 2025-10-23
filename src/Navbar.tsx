import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "16px 0",
        background: "transparent",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "24px",
          padding: "12px 24px",
          border: "2px solid white",
          borderRadius: "12px",
          background: "#92736c",
          boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <a href="#skills" style={{ color: "white", textDecoration: "none" }}>Skills</a>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
        <a href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</a>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
}
