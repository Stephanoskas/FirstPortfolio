import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert("Thanks! Your message was captured (check console).");
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "48px 16px",
        background: "#FDF1F5",
        color: "#92736C",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: 720,
          background: "white",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "1px solid #e7dedd",
        }}
      >
        <h1 style={{ marginBottom: 24, textAlign: "center" }}>Contact Me</h1>

        {/* Grid 2x2 for cantact page */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24, 
            marginBottom: 24,
          }}
        >
          <div>
            <label htmlFor="firstName" style={{ fontSize: 12 }}>
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="lastName" style={{ fontSize: 12 }}>
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="email" style={{ fontSize: 12 }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="phone" style={{ fontSize: 12 }}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        
        <div style={{ marginBottom: 24 }}>
          <label htmlFor="message" style={{ fontSize: 12 }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            style={{
              ...inputStyle,
              resize: "vertical",
              height: 160,
            }}
          />
        </div>

        
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            style={{
              background: "#92736C",
              color: "white",
              border: "none",
              borderRadius: 10,
              padding: "14px 24px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
            }}
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  marginBottom: 8,
  padding: "12px 1px",
  borderRadius: 10,
  border: "1px solid #e7dedd",
  outline: "none",
  background: "#fff",
  color: "#92736C",
};
