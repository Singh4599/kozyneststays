"use client";

import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError("Please enter your email address."); return; }
    if (!validate(email)) { setError("Please enter a valid email address."); return; }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      id="offers"
      className="kn-section"
      style={{ background: "#FAF7F2" }}
      aria-labelledby="newsletter-heading"
    >
      <div className="kn-container">
        <div style={{
          background: "#fff", borderRadius: "20px", border: "1px solid #E5DED4",
          padding: "clamp(28px, 5vw, 44px) clamp(24px, 6vw, 52px)",
        }}>

          {/* ── Desktop: horizontal row ── Mobile: stacked ── */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">

            {/* Left — Icon + copy */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flexShrink: 0 }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px", background: "#F2ECE3",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Mail size={20} color="#1E2A20" strokeWidth={1.6} />
              </div>
              <div>
                <h2
                  id="newsletter-heading"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 600, color: "#1E2A20",
                    lineHeight: 1.25, marginBottom: "6px",
                  }}
                >
                  Get exclusive offers &amp; stay updates
                </h2>
                <p style={{ fontSize: "13.5px", color: "#68645E" }}>
                  Join our community and never miss a good stay!
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div style={{ flex: 1, width: "100%", minWidth: 0 }}>
              {submitted ? (
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#1E2A20" }}>
                  <CheckCircle size={20} />
                  <p style={{ fontWeight: 600, fontSize: "15px" }}>You&rsquo;re subscribed! Thank you 🎉</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{
                    display: "flex", gap: "10px", alignItems: "flex-start",
                    flexDirection: "row", flexWrap: "nowrap",
                  }}>
                    {/* Input — takes remaining space */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <label htmlFor="nl-email" className="sr-only">Email address</label>
                      <input
                        id="nl-email"
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                        placeholder="Enter your email address"
                        style={{
                          display: "block", width: "100%",
                          padding: "13px 18px", fontSize: "14px",
                          border: `1.5px solid ${error ? "#f87171" : "#E5DED4"}`,
                          borderRadius: "12px", outline: "none",
                          background: "#FAF7F2", color: "#1C1B19",
                          boxSizing: "border-box", minHeight: "48px",
                        }}
                        aria-invalid={!!error}
                      />
                      {error && (
                        <p style={{ marginTop: "6px", fontSize: "12px", color: "#ef4444", fontWeight: 500 }} role="alert">
                          {error}
                        </p>
                      )}
                    </div>

                    {/* Subscribe button — fixed width */}
                    <button
                      type="submit"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                        padding: "13px 22px", background: "#1E2A20", color: "#FAF7F2",
                        fontSize: "14px", fontWeight: 600, borderRadius: "12px",
                        border: "none", cursor: "pointer", whiteSpace: "nowrap",
                        minHeight: "48px", flexShrink: 0,
                      }}
                    >
                      Subscribe <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
