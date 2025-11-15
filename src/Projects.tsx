import type React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const boxStyle: React.CSSProperties = {
    width: "180px",
    height: "180px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
    textDecoration: "none",
    position: "relative",
    background: "#92736c20",
  };

  const labelStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    background: "rgba(0,0,0,0.6)",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: "6px 0",
    fontSize: "1rem",
  };

  const hoverIn = (el: HTMLElement) => {
    el.style.transform = "translateY(-5px)";
    el.style.boxShadow = "0 6px 12px rgba(0,0,0,0.25)";
  };

  const hoverOut = (el: HTMLElement) => {
    el.style.transform = "none";
    el.style.boxShadow = "none";
  };

  // ✅ Updated image paths for GitHub Pages + Project E
  const projects = [
    {
      to: "/projects/a",
      label: "Project A",
      img: `${import.meta.env.BASE_URL}images/Logo.png`,
      scale: "85%",
    },
    {
      to: "/projects/b",
      label: "Project B",
      img: `${import.meta.env.BASE_URL}images/vd.png`,
      scale: "85%",
    },
    {
      to: "/projects/c",
      label: "Project C",
      img: `${import.meta.env.BASE_URL}images/100.png`,
      scale: "100%",
    },
    {
      to: "/projects/d",
      label: "Project D",
      img: `${import.meta.env.BASE_URL}images/bbb.png`,
      scale: "100%",
    },
    {
      to: "/projects/e",
      label: "Project E",
      img: `${import.meta.env.BASE_URL}images/imglogo.png`, 
      scale: "100%",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "40px 16px",
        color: "#92736C",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "32px", fontSize: "2rem" }}>Projects</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {projects.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            style={boxStyle}
            onMouseEnter={(e) => hoverIn(e.currentTarget)}
            onMouseLeave={(e) => hoverOut(e.currentTarget)}
          >
            <img
              src={p.img}
              alt={p.label}
              style={{
                width: p.scale,
                height: p.scale,
                objectFit: "contain",
                transition: "transform 0.3s",
              }}
            />
            <div style={labelStyle}>{p.label}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
