import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setIsSuccess(false);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4 font-sans"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="flex-1 px-4 py-3 rounded-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base outline-none bg-[#f8fbff]"
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="flex-1 px-4 py-3 rounded-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base outline-none bg-[#f8fbff]"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base outline-none bg-[#f8fbff]"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        value={formData.subject}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base outline-none bg-[#f8fbff]"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-base outline-none bg-[#f8fbff] resize-none"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-lg shadow hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
      {isSuccess && <div className="text-green-600 text-center font-medium pt-2">Your message has been sent. Thank you!</div>}
      {error && <div className="text-red-600 text-center font-medium pt-2">{error}</div>}
    </motion.form>
  );
};

export default ContactForm;
