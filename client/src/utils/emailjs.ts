import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (params: EmailParams) => {
  // Initialize EmailJS with your public key
  emailjs.init(process.env.VITE_EMAILJS_PUBLIC_KEY || "service_rycugzh");

  const serviceID = process.env.VITE_EMAILJS_SERVICE_ID || "service_rycugzh";
  const templateID = process.env.VITE_EMAILJS_TEMPLATE_ID || "template_4bp2dil";

  try {
    const response = await emailjs.send(serviceID, templateID, params);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
