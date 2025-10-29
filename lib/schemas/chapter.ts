import { z } from 'zod';

/**
 * Zod schema for Chapter validation
 */
export const ChapterSchema = z.object({
  timelineName: z.string().min(1, 'Timeline name is required'),
  arcName: z.string().min(1, 'Arc name is required'),
  episodeNumber: z.number().int().nonnegative('Episode number must be a non-negative integer'),
  partNumber: z.number().int().positive('Part number must be a positive integer'),
  number: z.number().int().positive('Number must be a positive integer'),

  // Metadata fields
  pov: z.string().min(1, 'POV character is required'),
  title: z.string().min(1, 'Title is required'),
  date: z
    .union([z.string(), z.date()])
    .transform((val) => (typeof val === 'string' ? new Date(val) : val)),
  excerpt: z.string().min(1, 'Excerpt is required'),
  location: z.string().min(1, 'Location is required'),
  outfit: z.string().optional(),
  kink: z.string().optional(),

  // Text statistics
  words: z.number().int().nonnegative('Words must be non-negative'),
  characters: z.number().int().nonnegative('Characters must be non-negative'),
  charactersNoSpaces: z
    .number()
    .int()
    .nonnegative('Characters without spaces must be non-negative'),
  paragraphs: z.number().int().nonnegative('Paragraphs must be non-negative'),
  sentences: z.number().int().nonnegative('Sentences must be non-negative'),
  readingTimeMinutes: z.number().int().nonnegative('Reading time must be non-negative'),
});

export const validateChapter = (data: unknown) => ChapterSchema.parse(data);
