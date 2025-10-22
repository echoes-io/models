import { z } from 'zod';

/**
 * Zod schema for ChapterMetadata validation
 */
export const ChapterMetadataSchema = z.object({
  pov: z.string().min(1, 'POV character is required'),
  title: z.string().min(1, 'Title is required'),
  date: z.string().min(1, 'Date is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  arc: z.string().min(1, 'Arc is required'),
  episode: z.number().int().positive('Episode must be a positive integer'),
  part: z.number().int().positive('Part must be a positive integer'),
  chapter: z.number().int().positive('Chapter must be a positive integer'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  location: z.string().min(1, 'Location is required'),
  outfit: z.string().optional(),
  kink: z.string().optional(),
});

/**
 * Zod schema for TextStats validation
 */
export const TextStatsSchema = z.object({
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

export const validateChapterMetadata = (data: unknown) => ChapterMetadataSchema.parse(data);
export const validateTextStats = (data: unknown) => TextStatsSchema.parse(data);
