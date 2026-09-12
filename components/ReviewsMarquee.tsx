const reviews = [
  { text: "Best stay I've had in Noida. Spotlessly clean, beautiful interiors.", author: "Priya S.", rating: 5 },
  { text: "Felt like a 5-star hotel at a fraction of the price. Will book again!", author: "Rahul M.", rating: 5 },
  { text: "The apartment was exactly as pictured — even better in person.", author: "Anita K.", rating: 5 },
  { text: "Perfect for our family trip. Spacious, well-equipped and safe.", author: "Vikram J.", rating: 5 },
  { text: "Seamless check-in, great communication, superb location.", author: "Deepika R.", rating: 5 },
  { text: "Cozy, clean and incredibly comfortable. Highly recommend KozyNest.", author: "Arjun T.", rating: 5 },
  { text: "The kitchen was fully stocked. Felt truly at home.", author: "Meera G.", rating: 5 },
  { text: "Support team was responsive within minutes at midnight!", author: "Sanjay P.", rating: 5 },
];

const track = [...reviews, ...reviews];

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#B78955" aria-hidden="true">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

export default function ReviewsMarquee() {
  return (
    <div
      aria-label="Guest reviews"
      style={{
        background: "#FAF7F2",
        borderTop: "1px solid #EDE8E1",
        borderBottom: "1px solid #EDE8E1",
        padding: "28px 0",
        overflow: "hidden",
        position: "relative",
        maxWidth: "100vw",
        width: "100%",
      }}
    >
      {/* Edge fade masks */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
        background: "linear-gradient(to right, #FAF7F2, transparent)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
        background: "linear-gradient(to left, #FAF7F2, transparent)",
        pointerEvents: "none",
      }} />

      <div
        style={{
          display: "flex",
          gap: "0",
          width: "max-content",
          animation: "marquee-scroll 48s linear infinite",
          animationDirection: "reverse",
        }}
      >
        {track.map((r, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "8px",
              padding: "0 40px",
              borderRight: "1px solid #EDE8E1",
              minWidth: "280px",
            }}
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: "3px" }}>
              {Array.from({ length: r.rating }).map((_, j) => <StarIcon key={j} />)}
            </div>
            {/* Quote */}
            <p style={{
              fontSize: "13.5px", color: "#3D3B38",
              lineHeight: 1.6, fontStyle: "italic",
              maxWidth: "240px",
            }}>
              &ldquo;{r.text}&rdquo;
            </p>
            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "26px", height: "26px", borderRadius: "50%",
                background: "#1E2A20",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "11px", fontWeight: 700, color: "#FAF7F2",
              }}>
                {r.author[0]}
              </div>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#1E2A20" }}>{r.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
