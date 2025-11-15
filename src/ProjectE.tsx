export default function ProjectE() {
  const container: React.CSSProperties = {
    padding: "40px 20px",
    color: "#92736C",
    textAlign: "center",
  };

  const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "28px",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const card: React.CSSProperties = {
    background: "#92736c20",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const caption: React.CSSProperties = {
    marginTop: "12px",
    fontWeight: "bold",
    fontSize: "1.05rem",
  };

  return (
    <div style={container}>
      <h1 style={{ marginBottom: "12px", fontSize: "2.4rem" }}>Project E</h1>
      <h2 style={{ marginBottom: "32px", fontSize: "1.6rem", color: "#7A5F59" }}>
        My Pictures of Life
      </h2>

      <div style={grid}>

        {/* Card 1 */}
        <div style={card}>
          <img
            src={`${import.meta.env.BASE_URL}images/football.jpg`}
            alt="Project E - Image 1"
            style={imgStyle}
          />
          <p style={caption}>This is my passion, my life, Football.</p>
        </div>

        {/* Card 2 */}
        <div style={card}>
          <img
            src={`${import.meta.env.BASE_URL}images/limerick.jpg`}
            alt="Project E - Image 2"
            style={imgStyle}
          />
          <p style={caption}>Aesthetic Night Photo in Limerick.</p>
        </div>

        {/* Card 3 */}
        <div style={card}>
          <img
            src={`${import.meta.env.BASE_URL}images/mypic.jpg`}
            alt="Project E - Image 3"
            style={imgStyle}
          />
          <p style={caption}>Business Picture.</p>
        </div>

      </div>
    </div>
  );
}
