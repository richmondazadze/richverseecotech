import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = process.env.CONTACT_TO || 'richverseecotech@gmail.com';
const FROM = process.env.CONTACT_FROM || 'Richverseecotech <contact@richverseecotech.com>';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body ?? {};

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    // Notify the business of the new subscriber
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: 'New newsletter subscriber',
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });

    // Welcome the subscriber
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'Welcome to the Richverseecotech newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; color: #171717;">
          <h2 style="color:#4338ca;">You're subscribed 🎉</h2>
          <p>Thanks for joining. You'll receive updates on sustainable technology, security, and growth — no spam, ever.</p>
          <p>Warm regards,<br/>The Richverseecotech Team</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Subscribed successfully.' });
  } catch (error) {
    console.error('newsletter error:', error);
    return res.status(500).json({ error: 'Failed to subscribe. Please try again later.' });
  }
}
