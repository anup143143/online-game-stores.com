import React, { useState } from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      setSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
<>
    <Navbar/>
    <section className="contact-section">
      <div className="contact-container">

        <h2>Contact Us</h2>

        {submitted && <p className="success">Message sent successfully!</p>}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span>{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

        </form>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;