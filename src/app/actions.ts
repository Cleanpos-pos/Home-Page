
'use server';

import { z } from 'zod';
import { analyzeTestimonialSentiment } from '@/ai/flows/analyze-testimonial-sentiment';
import type { AnalyzeTestimonialSentimentOutput } from '@/ai/flows/analyze-testimonial-sentiment';
import * as brevo from 'sib-api-v3-sdk';

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    const { fieldErrors } = validatedFields.error.flatten();
    return {
      message: 'Please check your input and try again.',
      fields: {
        name: fieldErrors.name?.[0] ?? '',
        email: fieldErrors.email?.[0] ?? '',
        message: fieldErrors.message?.[0] ?? '',
      },
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log('Contact form submitted:', validatedFields.data);

  return { message: 'Thank you for your message! We will get back to you soon.' };
}


export async function analyzeSentimentAction(testimonial: string): Promise<AnalyzeTestimonialSentimentOutput | { error: string }> {
    if (!testimonial || testimonial.trim().length < 10) {
        return { error: 'Testimonial is too short to analyse.' };
    }
    try {
        const result = await analyzeTestimonialSentiment({ testimonial });
        return result;
    } catch (e) {
        console.error(e);
        return { error: 'Failed to analyse sentiment.' };
    }
}

const cardMachineEnquirySchema = z.object({
    machines: z.array(z.string()).min(1, { message: 'Please select at least one machine.' }),
    otherProducts: z.array(z.string()).optional(),
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    company: z.string().min(2, 'Company name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email address.'),
    phone: z.string().min(10, 'Please enter a valid phone number.'),
});


export async function submitCardMachineEnquiry(formData: unknown) {
    const validatedFields = cardMachineEnquirySchema.safeParse(formData);

    if (!validatedFields.success) {
        const fieldErrors = validatedFields.error.flatten().fieldErrors;
        return {
            success: false,
            message: 'Please check your input and try again.',
            errors: {
                machines: fieldErrors.machines?.[0],
                otherProducts: fieldErrors.otherProducts?.[0],
                name: fieldErrors.name?.[0],
                company: fieldErrors.company?.[0],
                email: fieldErrors.email?.[0],
                phone: fieldErrors.phone?.[0],
            },
        };
    }
    
    const { machines, otherProducts, name, company, email, phone } = validatedFields.data;

    const defaultClient = brevo.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY!;

    const apiInstance = new brevo.TransactionalEmailsApi();


    const emailBody = `
        <h1>New Card Machine Enquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <h2>Enquiry Details</h2>
        <p><strong>Selected Machines:</strong></p>
        <ul>
            ${machines.map(m => `<li>${m}</li>`).join('')}
        </ul>
        ${otherProducts && otherProducts.length > 0 ? `
        <p><strong>Also interested in:</strong></p>
        <ul>
            ${otherProducts.map(p => `<li>${p}</li>`).join('')}
        </ul>
        ` : ''}
    `;

    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { email: 'enquiry@posso.uk', name: 'Posso Enquiry' };
    sendSmtpEmail.to = [{ email: 'info@posso.uk' }];
    sendSmtpEmail.subject = 'New Card Machine Enquiry';
    sendSmtpEmail.htmlContent = emailBody;

    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);

        return { 
            success: true,
            message: 'Thank you for your enquiry! We have received your details and will be in touch shortly.' 
        };

    } catch (error) {
        console.error('Brevo API Error:', error);
        return {
            success: false,
            message: 'There was an error sending your enquiry. Please try again later.',
            errors: null,
        }
    }
}
