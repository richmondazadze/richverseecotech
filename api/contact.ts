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
        <div style="font-family: 'Nunito', Arial, sans-serif; background: #f4f8fb; padding: 0; margin: 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #f4f8fb; padding: 0; margin: 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: #fff; border-radius: 16px; box-shadow: 0 4px 32px rgba(59,130,246,0.08); margin: 40px 0; width: 100%; max-width: 600px;">
                  <tr>
                    <td align="center" style="padding: 40px 0 20px 0;">
                      <img src="https://richverseecotech.com/assets/img/logo.svg" alt="RichverseEcoTech Logo" width="64" height="64" style="display: block; margin: 0 auto 12px auto;" />
                      <h1 style="font-size: 2rem; color: #2563eb; margin: 0; font-family: 'Nunito', Arial, sans-serif;">RichverseEcoTech</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 0 24px 24px 24px; padding-left: max(5vw, 24px); padding-right: max(5vw, 24px);">
                      <h2 style="font-size: 1.5rem; color: #2563eb; margin-bottom: 12px; font-family: 'Nunito', Arial, sans-serif;">Thank You for Contacting Us</h2>
                      <p style="font-size: 1.1rem; color: #1e293b; margin-bottom: 18px;">Dear ${name},</p>
                      <p style="font-size: 1rem; color: #334155; margin-bottom: 18px;">Thank you for reaching out to <span style="color: #2563eb; font-weight: bold;">RichverseEcoTech</span>. We have received your message and our team will review your inquiry as soon as possible.</p>
                      <div style="background: #e0e7ff; border-radius: 8px; padding: 18px 24px; margin-bottom: 18px;">
                        <p style="font-size: 1rem; color: #2563eb; font-weight: 600; margin: 0 0 8px 0;">What happens next?</p>
                        <ul style="font-size: 1rem; color: #334155; margin: 0; padding-left: 20px;">
                          <li>Our team will review your message and get in touch with you within 1 business day.</li>
                          <li>If your inquiry is urgent, feel free to reply to this email for a faster response.</li>
                        </ul>
                      </div>
                      <p style="font-size: 1rem; color: #334155; margin-bottom: 18px;">We appreciate your interest in RichverseEcoTech and look forward to assisting you.</p>
                      <p style="font-size: 1rem; color: #334155; margin-bottom: 0;">Best regards,<br/>The <span style="color: #2563eb; font-weight: bold;">RichverseEcoTech</span> Team<br/><a href="https://richverseecotech.com" style="color: #2563eb; text-decoration: underline;">richverseecotech.com</a></p>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding: 24px 0 32px 0;">
                      <span style="font-size: 0.95rem; color: #64748b;">&copy; ${new Date().getFullYear()} RichverseEcoTech. All rights reserved.</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
} 