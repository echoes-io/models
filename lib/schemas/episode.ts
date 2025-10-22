import { z } from 'zod';

/**
 * Zod schema for Episode validation
 */
export const EpisodeSchema = z.object({
  timelineName: z.string().min(1, 'Timeline name is required'),
  arcName: z.string().min(1, 'Arc name is required'),
  number: z.number().int().positive('Number must be a positive integer'),
  slug: z.string().min(1, 'Slug is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});

export const validateEpisode = (data: unknown) => EpisodeSchema.parse(data);
