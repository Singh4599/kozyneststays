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
          padding: "clamp(24px, 5vw, 40px) clamp(24px, 6vw, 48px)", display: "flex", alignItems: "center",
          gap: "40px", flexWrap: "wrap",
        }}>
          {/* Icon + Text */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flex: 1, minWidth: "280px" }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "12px", background: "#F2ECE3",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Mail size={20} color="#1E2A20" strokeWidth={1.6} />
            </div>
            <div>
              <h2
                id="newsletter-heading"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "22px", fontWeight: 600, color: "#1E2A20",
                  lineHeight: 1.3, marginBottom: "6px",
                }}
              >
                Get exclusive offers &amp; stay updates
              </h2>
              <p style={{ fontSize: "14px", color: "#68645E" }}>Join our community and never miss a good stay!</p>
            </div>
          </div>

          {/* Form */}
          <div style={{ flex: 1, minWidth: "280px", width: "100%" }}>
            {submitted ? (
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#1E2A20" }}>
                <CheckCircle size={20} />
                <p style={{ fontWeight: 600, fontSize: "15px" }}>You&rsquo;re subscribed! Thank you 🎉</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-start">
                  <div style={{ flex: 1 }}>
                    <label htmlFor="nl-email" className="sr-only">Email address</label>
                    <input
                      id="nl-email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                      placeholder="Enter your email"
                      style={{
                        width: "100%", padding: "12px 16px", fontSize: "14px",
                        border: `1px solid ${error ? "#f87171" : "#E5DED4"}`,
                        borderRadius: "10px", outline: "none",
                        background: "#FAF7F2", color: "#1C1B19", boxSizing: "border-box",
                      }}
                      aria-invalid={!!error}
                    />
                    {error && (
                      <p style={{ marginTop: "6px", fontSize: "12px", color: "#ef4444", fontWeight: 500 }} role="alert">
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                      padding: "12px 20px", background: "#1E2A20", color: "#FAF7F2",
                      fontSize: "13.5px", fontWeight: 600, borderRadius: "10px",
                      border: "none", cursor: "pointer", whiteSpace: "nowrap", width: "100%",
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
    </section>
  );
}
