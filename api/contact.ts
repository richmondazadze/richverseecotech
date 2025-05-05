import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send email to business
    await resend.emails.send({
      from: 'RichverseEcoTech <contact@richverseecotech.com>',
      to: 'richverseecotech@gmail.com',
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'RichverseEcoTech <contact@richverseecotech.com>',
      to: email,
      subject: 'Thank you for contacting RichverseEcoTech',
      html: `
        <h2>Thank You for Contacting RichverseEcoTech</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We have received your message and our team will review your inquiry as soon as possible.</p>
        <p><strong>What happens next?</strong></p>
        <ul>
          <li>Our team will review your message and get in touch with you within 1 business day.</li>
          <li>If your inquiry is urgent, feel free to reply to this email for a faster response.</li>
        </ul>
        <p>We appreciate your interest in RichverseEcoTech and look forward to assisting you.</p>
        <p>Best regards,<br/>The RichverseEcoTech Team<br/><a href="https://richverseecotech.com">richverseecotech.com</a></p>
      `
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
} 