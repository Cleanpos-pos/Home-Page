
'use server';

import { z } from 'zod';
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
