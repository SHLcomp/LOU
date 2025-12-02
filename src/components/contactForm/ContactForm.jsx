import { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "", // new dropdown field
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all the necessary feilds.");
      return;
    }

    setStatus("Sent Succesfully ✅");
    setFormData({ name: "", email: "", subject: "", service: "", message: "" });
  };

  return (
    <div className="contact-form golden-glow">
      <h2>Contact Us</h2>
      <p>
        Are you ready to start your own project? Contact our team
        Specialist for consultation, quotes and professional guidance.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        {/* 📌 New Dropdown */}
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Choose service type *</option>
          <option value="استشارة">Events plans</option>
          <option value="تصميم">Option 2</option>
          <option value="إنشاء">Option 3</option>
          <option value="صيانة">Option 4</option>
        </select>

        <textarea
          name="message"
          placeholder="Message *"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit silver-glow">Send</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default ContactForm;
