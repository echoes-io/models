/**
 * Chapter metadata extracted from frontmatter
 * Must match @echoes-io/utils ChapterMetadata interface
 */
export interface ChapterMetadata {
  /** Point of view character */
  pov: string;
  /** Chapter title */
  title: string;
  /** Chapter date (ISO string or custom format) */
  date: string;
  /** Timeline name */
  timeline: string;
  /** Arc name */
  arc: string;
  /** Episode number */
  episode: number;
  /** Part number within episode */
  part: number;
  /** Chapter number within episode */
  chapter: number;
  /** Brief chapter description */
  excerpt: string;
  /** Chapter location/setting */
  location: string;
  /** Character outfit description (optional) */
  outfit?: string;
  /** Content tags/kinks (optional) */
  kink?: string;
}

/**
 * Text statistics from content analysis
 * Must match @echoes-io/utils TextStats interface
 */
export interface TextStats {
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
