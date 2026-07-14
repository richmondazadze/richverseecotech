import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

// Where notifications are delivered, and the verified sender domain.
const TO = process.env.CONTACT_TO || 'richverseecotech@gmail.com';
const FROM = process.env.CONTACT_FROM || 'Richverseecotech <contact@richverseecotech.com>';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    // Notify the business
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New enquiry: ${subject || 'General enquiry'}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    // Confirmation to the sender
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'Thanks for contacting Richverseecotech',
      html: `
        <div style="font-family: Arial, sans-serif; color: #171717;">
          <h2 style="color:#4338ca;">Thank you for reaching out</h2>
          <p>Dear ${name},</p>
          <p>We've received your message and our team will get back to you within one business day.</p>
          <p>Warm regards,<br/>The Richverseecotech Team</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('contact error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please email us directly.' });
  }
}
