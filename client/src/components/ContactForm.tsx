import { useState } from 'react';
import { sendEmail } from '../utils/emailjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    try {
      await sendEmail(formData);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="php-email-form">
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      {isSuccess && (
        <div className="sent-message">
          Your message has been sent. Thank you!
        </div>
      )}
      {isLoading && (
        <div className="loading">Loading</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <textarea
              className="form-control"
              name="message"
              rows={6}
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-md-12 text-center">
            <button type="submit" disabled={isLoading}>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
