import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
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
      toast.success('Your message has been sent! We appreciate your interest and will contact you soon.', {
        style: { fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25)' }
      });
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to send message', {
        style: { fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 8px 32px 0 rgba(239,68,68,0.25)' }
      });
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
    </motion.form>
  );
};

export default ContactForm;
