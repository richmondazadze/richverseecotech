import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'RichverseEcoTech <contact@richverseecotech.com>',
      to: email,
      subject: 'Thank you for subscribing to RichverseEcoTech Newsletter',
      html: `
        <h2>Welcome to the RichverseEcoTech Newsletter!</h2>
        <p>Dear Subscriber,</p>
        <p>Thank you for subscribing to our newsletter. You are now part of a community that values innovation, sustainability, and the latest in eco-friendly technology solutions.</p>
        <p><strong>What to expect:</strong></p>
        <ul>
          <li>Exclusive updates on our latest projects and services</li>
          <li>Insights and tips on sustainable technology</li>
          <li>Special offers and invitations to upcoming events</li>
        </ul>
        <p>We are excited to have you with us. If you have any questions or suggestions, feel free to reply to this email.</p>
        <p>Best regards,<br/>The RichverseEcoTech Team<br/><a href="https://richverseecotech.com">richverseecotech.com</a></p>
      `
    });

    res.status(200).json({ message: 'Subscription email sent successfully' });
  } catch (error) {
    console.error('Error sending newsletter email:', error);
    res.status(500).json({ error: 'Failed to send newsletter email' });
  }
} 