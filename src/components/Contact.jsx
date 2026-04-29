import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="journey-title">
        Contact <span>Me</span>
      </h1>
      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="hidden"
          name="access_key"
          value="4668d968-42ef-4e01-a8ec-7c938b63cc53"
        />

        <div className="contact-row">
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="contact-row">
          <input
            className="contact-input"
            type="number"
            name="mobile"
            placeholder="Mobile Number"
          />
          <input
            className="contact-input"
            type="text"
            name="subject"
            placeholder="Email Subject"
          />
        </div>
        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          rows={7}
          required
        />

        {status === "success" && (
          <p className="contact-status success">
            ✅ Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="contact-status error">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <div className="contact-btn-wrapper">
          <button
            className="contact-btn"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}