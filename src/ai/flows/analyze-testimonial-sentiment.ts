'use server';

/**
 * @fileOverview Analyzes the sentiment of a testimonial.
 *
 * - analyzeTestimonialSentiment - A function that analyzes the sentiment of a testimonial.
 * - AnalyzeTestimonialSentimentInput - The input type for the analyzeTestimonialSentiment function.
 * - AnalyzeTestimonialSentimentOutput - The return type for the analyzeTestimonialSentiment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeTestimonialSentimentInputSchema = z.object({
  testimonial: z.string().describe('The testimonial to analyze.'),
});
export type AnalyzeTestimonialSentimentInput = z.infer<typeof AnalyzeTestimonialSentimentInputSchema>;

const AnalyzeTestimonialSentimentOutputSchema = z.object({
  sentiment: z
    .enum(['positive', 'negative', 'neutral'])
    .describe('The sentiment of the testimonial.'),
  confidence: z
    .number()
    .min(0)
    .max(1)
    .describe('The confidence score of the sentiment analysis.'),
});
export type AnalyzeTestimonialSentimentOutput = z.infer<typeof AnalyzeTestimonialSentimentOutputSchema>;

export async function analyzeTestimonialSentiment(
  input: AnalyzeTestimonialSentimentInput
): Promise<AnalyzeTestimonialSentimentOutput> {
  return analyzeTestimonialSentimentFlow(input);
}

const analyzeTestimonialSentimentPrompt = ai.definePrompt({
  name: 'analyzeTestimonialSentimentPrompt',
  input: {schema: AnalyzeTestimonialSentimentInputSchema},
  output: {schema: AnalyzeTestimonialSentimentOutputSchema},
  prompt: `You are a sentiment analysis expert. Analyze the sentiment of the following testimonial and classify it as positive, negative, or neutral. Also, provide a confidence score (0-1) for your analysis.\n\nTestimonial: {{{testimonial}}}`,
});

const analyzeTestimonialSentimentFlow = ai.defineFlow(
  {
    name: 'analyzeTestimonialSentimentFlow',
    inputSchema: AnalyzeTestimonialSentimentInputSchema,
    outputSchema: AnalyzeTestimonialSentimentOutputSchema,
  },
  async input => {
    const {output} = await analyzeTestimonialSentimentPrompt(input);
    return output!;
  }
);
