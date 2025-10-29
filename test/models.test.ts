import { describe, expect, test } from 'vitest';

import {
  validateArc,
  validateChapter,
  validateChapterMetadata,
  validateEpisode,
  validatePart,
  validateTextStats,
  validateTimeline,
} from '../lib/index.js';

describe('Timeline validation', () => {
  test('validates correct timeline', () => {
    const timeline = {
      name: 'main-story',
      description: 'The main storyline',
    };
    expect(() => validateTimeline(timeline)).not.toThrow();
  });

  test('rejects timeline without name', () => {
    const timeline = { description: 'Test' };
    expect(() => validateTimeline(timeline)).toThrow();
  });
});

describe('Arc validation', () => {
  test('validates correct arc', () => {
    const arc = {
      timelineName: 'main-story',
      name: 'introduction',
      number: 1,
      description: 'The beginning',
    };
    expect(() => validateArc(arc)).not.toThrow();
  });

  test('rejects arc with invalid number', () => {
    const arc = {
      timelineName: 'main-story',
      name: 'introduction',
      number: 0,
      description: 'Test',
    };
    expect(() => validateArc(arc)).toThrow();
  });
});

describe('Episode validation', () => {
  test('validates correct episode', () => {
    const episode = {
      timelineName: 'main-story',
      arcName: 'introduction',
      number: 1,
      slug: 'first-meeting',
      title: 'First Meeting',
      description: 'The first encounter',
    };
    expect(() => validateEpisode(episode)).not.toThrow();
  });

  test('accepts episode with number 0', () => {
    const episode = {
      timelineName: 'main-story',
      arcName: 'introduction',
      number: 0,
      slug: 'prologue',
      title: 'Prologue',
      description: 'The beginning',
    };
    expect(() => validateEpisode(episode)).not.toThrow();
  });

  test('rejects episode with negative number', () => {
    const episode = {
      timelineName: 'main-story',
      arcName: 'introduction',
      number: -1,
      slug: 'invalid',
      title: 'Invalid',
      description: 'Test',
    };
    expect(() => validateEpisode(episode)).toThrow();
  });
});

describe('Part validation', () => {
  test('validates correct part', () => {
    const part = {
      timelineName: 'main-story',
      arcName: 'introduction',
      episodeNumber: 1,
      number: 1,
      slug: 'morning',
      title: 'Morning',
      description: 'The morning scene',
    };
    expect(() => validatePart(part)).not.toThrow();
  });

  test('accepts part with episodeNumber 0', () => {
    const part = {
      timelineName: 'main-story',
      arcName: 'introduction',
      episodeNumber: 0,
      number: 1,
      slug: 'intro',
      title: 'Introduction',
      description: 'The intro',
    };
    expect(() => validatePart(part)).not.toThrow();
  });

  test('rejects part with negative episodeNumber', () => {
    const part = {
      timelineName: 'main-story',
      arcName: 'introduction',
      episodeNumber: -1,
      number: 1,
      slug: 'invalid',
      title: 'Invalid',
      description: 'Test',
    };
    expect(() => validatePart(part)).toThrow();
  });
});

describe('ChapterMetadata validation', () => {
  test('validates correct metadata', () => {
    const metadata = {
      pov: 'Alice',
      title: 'First Meeting',
      date: '2025-01-01',
      timeline: 'main-story',
      arc: 'introduction',
      episode: 1,
      part: 1,
      chapter: 1,
      summary: 'Alice meets Bob',
      location: 'Coffee Shop',
    };
    expect(() => validateChapterMetadata(metadata)).not.toThrow();
  });

  test('validates metadata with optional fields', () => {
    const metadata = {
      pov: 'Alice',
      title: 'First Meeting',
      date: '2025-01-01',
      timeline: 'main-story',
      arc: 'introduction',
      episode: 1,
      part: 1,
      chapter: 1,
      summary: 'Alice meets Bob',
      location: 'Coffee Shop',
      outfit: 'Blue dress',
      kink: 'romance',
    };
    expect(() => validateChapterMetadata(metadata)).not.toThrow();
  });

  test('validates metadata with Date object', () => {
    const metadata = {
      pov: 'Alice',
      title: 'First Meeting',
      date: '2025-01-01',
      timeline: 'main-story',
      arc: 'introduction',
      episode: 1,
      part: 1,
      chapter: 1,
      summary: 'Alice meets Bob',
      location: 'Coffee Shop',
    };
    expect(() => validateChapterMetadata(metadata)).not.toThrow();
  });
});

describe('TextStats validation', () => {
  test('validates correct stats', () => {
    const stats = {
      words: 1000,
      characters: 5000,
      charactersNoSpaces: 4000,
      paragraphs: 10,
      sentences: 50,
      readingTimeMinutes: 5,
    };
    expect(() => validateTextStats(stats)).not.toThrow();
  });

  test('rejects negative values', () => {
    const stats = {
      words: -1,
      characters: 5000,
      charactersNoSpaces: 4000,
      paragraphs: 10,
      sentences: 50,
      readingTimeMinutes: 5,
    };
    expect(() => validateTextStats(stats)).toThrow();
  });
});

describe('Chapter validation', () => {
  test('validates complete chapter', () => {
    const chapter = {
      timelineName: 'main-story',
      arcName: 'introduction',
      episodeNumber: 1,
      partNumber: 1,
      number: 1,
      pov: 'Alice',
      title: 'First Meeting',
      date: '2025-01-01',
      summary: 'Alice meets Bob',
      location: 'Coffee Shop',
      words: 1000,
      characters: 5000,
      charactersNoSpaces: 4000,
      paragraphs: 10,
      sentences: 50,
      readingTimeMinutes: 5,
    };
    expect(() => validateChapter(chapter)).not.toThrow();
  });

  test('validates chapter with optional fields', () => {
    const chapter = {
      timelineName: 'main-story',
      arcName: 'introduction',
      episodeNumber: 1,
      partNumber: 1,
      number: 1,
      pov: 'Alice',
      title: 'First Meeting',
      date: '2025-01-01',
      summary: 'Alice meets Bob',
      location: 'Coffee Shop',
      outfit: 'Blue dress',
      kink: 'romance',
      words: 1000,
      characters: 5000,
      charactersNoSpaces: 4000,
      paragraphs: 10,
      sentences: 50,
      readingTimeMinutes: 5,
    };
    expect(() => validateChapter(chapter)).not.toThrow();
  });

  test('validates chapter with Date object', () => {
    const chapter = {
      timelineName: 'main-story',
      arcName: 'introduction',
      episodeNumber: 1,
      partNumber: 1,
      number: 1,
      pov: 'Alice',
      title: 'First Meeting',
      date: '2025-01-01',
      summary: 'Alice meets Bob',
      location: 'Coffee Shop',
      words: 1000,
      characters: 5000,
      charactersNoSpaces: 4000,
      paragraphs: 10,
      sentences: 50,
      readingTimeMinutes: 5,
    };
    expect(() => validateChapter(chapter)).not.toThrow();
  });

  test('accepts chapter with episodeNumber 0', () => {
    const chapter = {
      timelineName: 'main-story',
      arcName: 'introduction',
      episodeNumber: 0,
      partNumber: 1,
      number: 1,
      pov: 'Alice',
      title: 'Prologue',
      date: '2025-01-01',
      summary: 'The beginning',
      location: 'Coffee Shop',
      words: 1000,
      characters: 5000,
      charactersNoSpaces: 4000,
      paragraphs: 10,
      sentences: 50,
      readingTimeMinutes: 5,
    };
    expect(() => validateChapter(chapter)).not.toThrow();
  });

  test('rejects chapter with negative episodeNumber', () => {
    const chapter = {
      timelineName: 'main-story',
      arcName: 'introduction',
      episodeNumber: -1,
      partNumber: 1,
      number: 1,
      pov: 'Alice',
      title: 'Invalid',
      date: '2025-01-01',
      summary: 'Test',
      location: 'Coffee Shop',
      words: 1000,
      characters: 5000,
      charactersNoSpaces: 4000,
      paragraphs: 10,
      sentences: 50,
      readingTimeMinutes: 5,
    };
    expect(() => validateChapter(chapter)).toThrow();
  });
});
