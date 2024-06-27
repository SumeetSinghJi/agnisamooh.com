// src/components/backend/ContactUsForm.js

import React, { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    let errors = { ...formErrors };
    let isValid = true;

    // Email validation (required and valid format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Invalid email format';
      isValid = false;
    } else {
      errors.email = '';
    }

    // Message validation (required and character limit)
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length > 1000) {
      errors.message = 'Message must be less than 1000 characters';
      isValid = false;
    } else {
      errors.message = '';
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Limit message to 1000 characters
    if (name === 'message' && value.length > 1000) {
      return;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, send data to Formspree endpoint
      const form = e.target;
      const formDataObj = new FormData(form);
      const xhr = new XMLHttpRequest();

      xhr.open(form.method, form.action);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          setFormSubmitted(true);
          setFormData({
            email: '',
            message: ''
          });
        } else {
          console.error('Failed to submit form');
        }
      };

      xhr.send(formDataObj);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xwpeeked"
      method="POST"
    >
      <div className="form-group">
        <label htmlFor="email">Your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Your message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        {formErrors.message && <span className="error">{formErrors.message}</span>}
      </div>

      <button type="submit">Send</button>

      {formSubmitted && <p className="success-message">Thank you for your message!</p>}
    </form>
  );
};

export default ContactUsForm;
