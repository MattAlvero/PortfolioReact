// src/components/ContactForm.tsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle reCAPTCHA verification
  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  // Handle form submission
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setStatusMessage('Please verify you are human.');
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm(
      'service_s384nus',  // Replace with your EmailJS Service ID
      'template_kxpgv39',  // Replace with your EmailJS Template ID
      form.current!,
      '6aSvcVCymakGcIxdG'    // Replace with your EmailJS Public Key
    ).then(
      (result) => {
        console.log('EmailJS result:', result);
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      },
      (error) => {
        console.error('EmailJS error:', error)
        setStatusMessage('There was an error sending your message. Please try again.');
      }
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      {/* Display status message after form submission */}
      {statusMessage && <p className="text-center text-green-500 mb-4">{statusMessage}</p>}

      <form onSubmit={sendEmail} ref={form} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-black">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-black">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-black">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows={6}
            required
          />
        </div>

        {/* reCAPTCHA */}
        <div className="text-center">
          <ReCAPTCHA
            sitekey="6LdpKDQrAAAAABON8vPIBjEghAqM4OHLT6lhE99s"  // Replace with your reCAPTCHA site key
            onChange={handleRecaptchaChange}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
