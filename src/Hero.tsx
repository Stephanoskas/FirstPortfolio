import { useEffect, useState } from "react";

export default function Hero() {
  const [opacity, setOpacity] = useState(1);

  // Fade out με scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadePoint = 600; 
      const newOpacity = Math.max(0, 1 - scrollY / fadePoint);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", 
        color: "#92736C",
        backgroundImage: "url('background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "left",
        paddingLeft: "5rem",
      }}
    >
      {/* Overlay fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to top, rgba(253, 241, 245, 0.26), rgba(253,241,245,0))",
          zIndex: 0,
        }}
      ></div>

      {/* Κύριο κείμενο */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          opacity: opacity,
          transition: "opacity 0.3s ease-out",
          maxWidth: "600px",
        }}
      >
        <h1>Hello there! I'm Stephanos 👋</h1>
        <h2>Digital and UX/UI Designer</h2>
      </div>

      {/* Scroll-down κείμενο στο κέντρο κάτω */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem", 
          left: "50%",
          transform: "translateX(-50%)", 
          zIndex: 1,
          opacity: opacity,
          transition: "opacity 0.3s ease-out",
          fontWeight: "500",
        }}
      >
        <p>Scroll down to explore my portfolio ↓</p>
      </div>
    </section>
  );
}
