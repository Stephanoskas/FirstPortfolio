export default function Blog() {
  const items = [
    {
      src: "/FirstPortfolio/images/1.jpg",
      text: "We shot the indoor scenes inside the dancing room, where the dancer experimented with different movements in front of the mirror. We wanted to explore how her body interacted with the space and how her gestures transformed when reflected back at her.",
    },
    {
      src: "/FirstPortfolio/images/2.jpg",
      text: "We tried to capture both her and her reflection at the same time, giving a sense of duality — almost like observing the dancer’s inner self. The mirror became part of the storytelling, revealing layers of her expression that you wouldn’t normally see from a single angle.",
    },
    {
      src: "/FirstPortfolio/images/3.jpg",
      text: "The outdoor scenes were filmed in a bright garden filled with natural sunlight. The open space and warm lighting added a softer, more natural tone to the visual narrative compared to the controlled indoor environment.",
    },
    {
      src: "/FirstPortfolio/images/4.jpg",
      text: "In these shots, we focused more on her movement and how the camera followed her flow. The intention was to build a rhythm between the performer and the lens, making the viewer feel like they are moving with her rather than just watching her.",
    },
    {
      src: "/FirstPortfolio/images/5.jpg",
      text: "We also wanted a more aesthetic, atmospheric look, so we used lower camera angles and softer light. This helped create a more cinematic mood, emphasizing elegance and depth in both her silhouette and her motion.",
    },
    {
      src: "/FirstPortfolio/images/6.jpg",
      text: "The scene where she dances with the sky as her background was an experiment to amplify the expressiveness of her movements. With nothing behind her except open sky, her gestures became the full focus — almost as if she was dancing in her own world, elevated and weightless.",
    },

    
    {
      isVideo: true,
      video: "/FirstPortfolio/images/video.mp4",
      text: "Final Video",
    },
  ];

  const imageItems = items.filter((item) => !item.isVideo);
  const videoItem = items.find((item) => item.isVideo);

  return (
    <div
      style={{
        paddingTop: "120px",
        paddingBottom: "60px",
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        color: "#92736C",
      }}
    >
      <h1 style={{ marginBottom: "40px", textAlign: "center" }}>Blog Gallery</h1>

      {/* GRID ΜΕ ΕΙΚΟΝΕΣ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        {imageItems.map((item, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "100%",
              height: "280px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
            }}
          >
            {/*IMAGE + HOVER */}
            <img
              src={item.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />

            {/* WHITE OVERLAY */}
            <div
              className="overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(255,255,255,0.55)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            />

            {/* CENTER TEXT */}
            <div
              className="overlay-text"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "black",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "center",
                width: "85%",
                lineHeight: "1.4",
                wordWrap: "break-word",
                overflow: "hidden",
                padding: "4px 6px",
                opacity: 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }}
            >
              {item.text}
            </div>

            {/* HOVER LOGIC */}
            <div
              style={{ position: "absolute", inset: 0 }}
              onMouseEnter={(e) => {
                const parent = e.currentTarget.parentElement!;
                const img = parent.querySelector("img") as HTMLImageElement;
                const overlay = parent.querySelector(
                  ".overlay"
                ) as HTMLDivElement;
                const overlayText = parent.querySelector(
                  ".overlay-text"
                ) as HTMLDivElement;

                if (img) img.style.transform = "scale(1.05)";
                if (overlay) overlay.style.opacity = "1";
                if (overlayText) overlayText.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const parent = e.currentTarget.parentElement!;
                const img = parent.querySelector("img") as HTMLImageElement;
                const overlay = parent.querySelector(
                  ".overlay"
                ) as HTMLDivElement;
                const overlayText = parent.querySelector(
                  ".overlay-text"
                ) as HTMLDivElement;

                if (img) img.style.transform = "scale(1)";
                if (overlay) overlay.style.opacity = "0";
                if (overlayText) overlayText.style.opacity = "0";
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* FULL-WIDTH VIDEO SECTION */}
      {videoItem && (
        <div
          style={{
            marginTop: "60px",
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "420px",
            }}
          >
            <video
              src={videoItem.video}
              muted
              loop
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div
            style={{
              padding: "16px 20px",
              background: "#fdf1f5",
              color: "#4a3b37",
              fontSize: "15px",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            {videoItem.text}
          </div>
        </div>
      )}
    </div>
  );
}
