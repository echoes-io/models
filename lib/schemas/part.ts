import { z } from 'zod';

/**
 * Zod schema for Part validation
 */
export const PartSchema = z.object({
  timelineName: z.string().min(1, 'Timeline name is required'),
  arcName: z.string().min(1, 'Arc name is required'),
  episodeNumber: z.number().int().positive('Episode number must be a positive integer'),
  number: z.number().int().positive('Number must be a positive integer'),
  slug: z.string().min(1, 'Slug is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});

export const validatePart = (data: unknown) => PartSchema.parse(data);
