import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { field, validEmail, objectBody } from '../server/forms.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const email = field(objectBody(req.body).email, 254);
  if (!email || !validEmail(email)) return res.status(400).json({ error: 'Please enter a valid email address.' });
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ error: 'Email signup is temporarily unavailable. Please try again later.' });
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.CONTACT_FROM || 'Richverse Ecotech <contact@richverseecotech.com>';
  const to = process.env.CONTACT_TO || 'richverseecotech@gmail.com';
  try {
    // The existing workflow sends signup requests to the team for processing.
    const delivery = await resend.emails.send({ from, to, subject: 'Newsletter signup request', text: `Newsletter signup requested by: ${email}` });
    if (delivery.error || !delivery.data?.id) return res.status(502).json({ error: 'We couldn’t receive your signup. Please try again later.' });
    return res.status(200).json({ message: 'Signup request received.' });
  } catch {
    return res.status(502).json({ error: 'We couldn’t confirm your signup. Please try again later.' });
  }
}
