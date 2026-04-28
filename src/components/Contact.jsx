import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.fullName || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        "service_llh7trk",
        "template_tlwcj3g",
        {
          from_name: form.fullName,
          from_email: form.email,
          mobile: form.mobile,
          subject: form.subject,
          message: form.message,
        },
        "DCxOrPwTPNQPjiGAW"
      )
      .then(() => {
        setStatus("success");
        setForm({ fullName: "", email: "", mobile: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="journey-title">
        Contact <span>Me</span>
      </h1>
      <div className="contact-form">
        <div className="contact-row">
          <input
            className="contact-input"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="contact-row">
          <input
            className="contact-input"
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
          />
          <input
            className="contact-input"
            type="text"
            name="subject"
            placeholder="Email Subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={7}
        />

        {status === "success" && (
          <p className="contact-status success">
             Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="contact-status error">
            ❌ Please fill in your name, email and message.
          </p>
        )}

        <div className="contact-bwtn-wrapper">
          <button
            className="contact-btn"
            onClick={handleSubmit}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </section>
  );
}