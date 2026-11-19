import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { field, validEmail, objectBody } from '../server/forms.js';

// Log only fixed service labels, never a free-text subject, message or identifier.
const services = new Map([
  ['Web Development','web-development'], ['Digital Marketing','digital-marketing'],
  ['Cybersecurity','cybersecurity'], ['Renewable Energy','renewable-energy'],
]);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const body = objectBody(req.body);
  const name = field(body.name, 100);
  const email = field(body.email, 254);
  const message = field(body.message, 5000);
  const subject = field(body.subject, 150, false);
  if (name === null || email === null || message === null || subject === null || !validEmail(email) || /[\r\n]/.test(name + subject) || body.website) {
    return res.status(400).json({ error: 'Please check your name, email, and message, then try again.' });
  }
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ error: 'The form is temporarily unavailable. Please email us directly.' });
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.CONTACT_FROM || 'Richverse Ecotech <contact@richverseecotech.com>';
  const to = process.env.CONTACT_TO || 'richverseecotech@gmail.com';
  try {
    const delivery = await resend.emails.send({
      from, to, replyTo: email,
      subject: `New enquiry: ${subject || 'General enquiry'}`,
      text: `New enquiry from ${name}\nEmail: ${email}\nService: ${subject || 'General enquiry'}\n\n${message}`,
    });
    // Resend returns provider errors in the response instead of always throwing.
    if (delivery.error || !delivery.data?.id) {
      console.error('Contact notification rejected by email provider.');
      return res.status(502).json({ error: 'We couldn’t send your enquiry. Please try again or email us directly.' });
    }
    console.info(JSON.stringify({event:'enquiry_accepted',service:services.get(subject) ?? 'general'}));
    // An acknowledgement failure must not invite a duplicate business enquiry.
    try {
      await resend.emails.send({ from, to: email, subject: 'Thanks for contacting Richverse Ecotech', text: `Hi ${name},\n\nThank you for getting in touch. We aim to reply to your enquiry within one business day.\n\nRichverse Ecotech\n${to}` });
    } catch {
      console.warn('Contact acknowledgement could not be sent.');
    }
    return res.status(200).json({ message: 'Enquiry received.' });
  } catch {
    console.error('Contact notification failed.');
    return res.status(502).json({ error: 'We couldn’t confirm delivery. Please email us to check before trying again.' });
  }
}
