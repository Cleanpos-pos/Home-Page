'use server';
// Trigger redeploy: 2026-01-11

import { z } from 'zod';
import nodemailer from 'nodemailer';
import { analyzeTestimonialSentiment } from '@/ai/flows/analyze-testimonial-sentiment';
import type { AnalyzeTestimonialSentimentOutput } from '@/ai/flows/analyze-testimonial-sentiment';

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

    const { name, email, message } = validatedFields.data;

    try {
        await sendEmailViaSMTP({
            subject: 'New Contact Form Submission',
            htmlContent: `
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `,
            senderName: 'Posso Contact Form'
        });

        return { message: 'Thank you for your message! We will get back to you soon.' };
    } catch (error) {
        console.error('SMTP Error:', error);
        return {
            message: 'There was an error sending your message. Please try again later.',
            fields: { name, email, message }
        };
    }
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

async function sendEmailViaSMTP({ subject, htmlContent, senderName }: { subject: string; htmlContent: string; senderName: string }) {
    console.log(`> [SMTP] Attempting to send email: ${subject}`);

    const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const port = parseInt(process.env.SMTP_PORT || '465');
    const user = process.env.SMTP_USER || 'info@posso.co.uk';
    const pass = process.env.SMTP_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'info@posso.uk';

    ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'RECIPIENT_EMAIL', 'SENDER_EMAIL'].forEach(key => {
        if (!process.env[key]) {
            console.error(`> [SMTP] CRITICAL: Missing environment variable: ${key}`);
            throw new Error(`Email service configuration missing (${key}).`);
        }
    });

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for other ports
        auth: {
            user,
            pass,
        },
        connectionTimeout: 10000, // 10 seconds
        greetingTimeout: 10000,
        socketTimeout: 15000,
    });

    const finalSenderEmail = process.env.SENDER_EMAIL || user;

    try {
        console.log(`> [SMTP] Sending email via ${host}...`);
        const info = await transporter.sendMail({
            from: `"${senderName}" <${finalSenderEmail}>`,
            to: recipientEmail,
            subject: subject,
            html: htmlContent,
        });

        console.log('> [SMTP] Email sent successfully:', info.messageId);
        return info;
    } catch (error: any) {
        console.error('> [SMTP] Error:', error);
        throw error;
    }
}

const cardMachineEnquirySchema = z.object({
    machines: z.array(z.string()).min(1, { message: 'Please select at least one machine.' }),
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    company: z.string().min(2, 'Company name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email address.'),
    phone: z.string().min(10, 'Please enter a valid phone number.'),
    message: z.string().optional(),
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
                name: fieldErrors.name?.[0],
                company: fieldErrors.company?.[0],
                email: fieldErrors.email?.[0],
                phone: fieldErrors.phone?.[0],
                message: fieldErrors.message?.[0],
            },
        };
    }

    const { machines, name, company, email, phone, message } = validatedFields.data;

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
        ${message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br>')}</p>` : ''}
    `;

    try {
        await sendEmailViaSMTP({
            subject: 'New Card Machine Enquiry',
            htmlContent: emailBody,
            senderName: 'Posso Enquiry'
        });

        return {
            success: true,
            message: 'Thank you for your enquiry! We have received your details and will be in touch shortly.'
        };

    } catch (error) {
        console.error('SMTP Error:', error);
        return {
            success: false,
            message: error instanceof Error ? `Error: ${error.message}` : 'There was an error sending your enquiry. Please try again later.',
            errors: null,
        }
    }
}


const generalEnquirySchema = z.object({
    products: z.array(z.string()).min(1, { message: 'Please select at least one product or service.' }),
    name: z.string().min(2, 'Name is required.'),
    company: z.string().min(2, 'Company name is required.'),
    email: z.string().email('A valid email is required.'),
    phone: z.string().min(10, 'A valid phone number is required.'),
    message: z.string().optional(),
});

export async function submitGeneralEnquiry(formData: unknown) {
    console.log('> [Action] submitGeneralEnquiry started');
    const validatedFields = generalEnquirySchema.safeParse(formData);

    if (!validatedFields.success) {
        console.warn('> [Action] Validation failed:', validatedFields.error.flatten().fieldErrors);
        const fieldErrors = validatedFields.error.flatten().fieldErrors;
        return {
            success: false,
            message: 'Please check your input and try again.',
            errors: {
                products: fieldErrors.products?.[0],
                name: fieldErrors.name?.[0],
                company: fieldErrors.company?.[0],
                email: fieldErrors.email?.[0],
                phone: fieldErrors.phone?.[0],
                message: fieldErrors.message?.[0],
            },
        };
    }

    const { products, name, company, email, phone, message } = validatedFields.data;

    const emailBody = `
        <h1>New General Enquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <h2>Enquiry Details</h2>
        <p><strong>Interested Products/Services:</strong></p>
        <ul>
            ${products.map(p => `<li>${p}</li>`).join('')}
        </ul>
        ${message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br>')}</p>` : ''}
    `;

    try {
        await sendEmailViaSMTP({
            subject: 'New General Enquiry from Website',
            htmlContent: emailBody,
            senderName: 'Posso General Enquiry'
        });
        return {
            success: true,
            message: 'Thank you for your enquiry! We will be in touch shortly.'
        };
    } catch (error) {
        console.error('SMTP Error:', error);
        return {
            success: false,
            message: error instanceof Error ? `Error: ${error.message}` : 'There was an error sending your enquiry. Please try again later.',
            errors: null,
        }
    }
}

const agentEnquirySchema = z.object({
    name: z.string().min(2, 'Name is required.'),
    email: z.string().email('A valid email is required.'),
    phone: z.string().min(10, 'A valid phone number is required.'),
    location: z.string().min(2, 'Location is required.'),
    experience: z.string().min(20, 'Please provide more detail about your experience.'),
    interest: z.array(z.string()).min(1, { message: 'Please select at least one product.' }),
});

export async function submitAgentEnquiry(formData: unknown) {
    const validatedFields = agentEnquirySchema.safeParse(formData);

    if (!validatedFields.success) {
        const fieldErrors = validatedFields.error.flatten().fieldErrors;
        return {
            success: false,
            message: 'Please check your input and try again.',
            errors: {
                name: fieldErrors.name?.[0],
                email: fieldErrors.email?.[0],
                phone: fieldErrors.phone?.[0],
                location: fieldErrors.location?.[0],
                experience: fieldErrors.experience?.[0],
                interest: fieldErrors.interest?.[0],
            },
        };
    }

    const { name, email, phone, location, experience, interest } = validatedFields.data;

    const emailBody = `
        <h1>New Independent Sales Agent Enquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <hr>
        <h2>Sales Experience</h2>
        <p>${experience.replace(/\n/g, '<br>')}</p>
        <hr>
        <h2>Primary Interest</h2>
        <ul>
            ${interest.map(p => `<li>${p}</li>`).join('')}
        </ul>
    `;

    try {
        await sendEmailViaSMTP({
            subject: 'New Independent Sales Agent Enquiry',
            htmlContent: emailBody,
            senderName: 'Posso Agent Enquiry'
        });
        return {
            success: true,
            message: 'Thank you for your interest! We have received your details and will be in touch if your profile matches our requirements.'
        };
    } catch (error) {
        console.error('SMTP Error:', error);
        return {
            success: false,
            message: error instanceof Error ? `Error: ${error.message}` : 'There was an error sending your enquiry. Please try again later.',
            errors: null,
        }
    }
}
