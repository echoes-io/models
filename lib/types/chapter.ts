/**
 * Chapter - Individual content file
 */
export interface Chapter {
  /** Timeline name (foreign key) */
  timelineName: string;
  /** Arc name (foreign key) */
  arcName: string;
  /** Episode number (foreign key) */
  episodeNumber: number;
  /** Part number (foreign key) */
  partNumber: number;
  /** Chapter number (part of composite primary key, unique within episode) */
  number: number;

  // Metadata fields (from frontmatter)
  /** Point of view character */
  pov: string;
  /** Chapter title */
  title: string;
  /** Chapter date */
  date: Date;
  /** Brief chapter description */
  excerpt: string;
  /** Chapter location/setting */
  location: string;
  /** Character outfit description (optional) */
  outfit?: string;
  /** Content tags/kinks (optional) */
  kink?: string;

  // Text statistics
  /** Total word count */
  words: number;
  /** Total character count (including spaces) */
  characters: number;
  /** Character count excluding spaces */
  charactersNoSpaces: number;
  /** Number of paragraphs */
  paragraphs: number;
  /** Number of sentences */
  sentences: number;
  /** Estimated reading time in minutes (200 words/min) */
  readingTimeMinutes: number;
}
