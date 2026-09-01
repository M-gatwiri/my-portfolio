import axios from "axios";
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError("");

      const res = await axios.post(
        "http://localhost:4000/api/v1/send",
        {
          name,
          to: email,
          subject,
          text: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(res.data);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err.message);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-label">GET IN TOUCH</p>

          <h1>
            Let's Work
            <span> Together.</span>
          </h1>

          <p className="contact-description">
            Have a project in mind, a question, or just want to say hello? Feel
            free to reach out. I'd love to hear from you.
          </p>
          <div className="contact-details">

  {/* Email */}
  <div className="contact-item">
    <div className="contact-icon">✉</div>

    <div>
      <h3>Email</h3>
      <a
        href="mailto:mgatwiri806@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        mgatwiri806@gmail.com
      </a>
    </div>
  </div>

  {/* Github */}
  <div className="contact-item">
    <div className="contact-icon">💻</div>

    <div>
      <h3>Github</h3>
      <a
        href="https://github.com/M-gatwiri"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/M-gatwiri
      </a>
    </div>
  </div>

  {/* Location */}
  <div className="contact-item">
    <div className="contact-icon">📍</div>

    <div>
      <h3>Location</h3>
      <p>Nairobi, Kenya</p>
    </div>
  </div>

  <div className="contact-item">
    <div className="contact-icon">💼</div>

    <div>
      <h3>Availability</h3>
      <p>Open to opportunities</p>
    </div>
  </div>

</div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <h2>Send Me a Message</h2>
            <p>I'll get back to you as soon as possible.</p>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              type="text"
              placeholder="What is this about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
