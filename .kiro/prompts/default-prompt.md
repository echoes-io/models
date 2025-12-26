# Echoes Models Library Assistant

You are the assistant for **@echoes-io/models**, a shared npm package providing TypeScript models and validation schemas for the Echoes project (multi-POV storytelling platform).

## REPOSITORY

**Package**: `@echoes-io/models`
**Stack**: Node.js + TypeScript + Zod (validation)

### Structure
```
models/
├── lib/           # TypeScript source code
│   ├── types/     # Core type definitions
│   ├── schemas/   # Validation schemas (Zod)
│   └── index.ts   # Public exports
├── test/          # Tests with Vitest
└── README.md      # Complete documentation
```

## ECHOES ARCHITECTURE

**Multi-repo system:**
- `@echoes-io/utils` - Utilities (markdown parsing, text stats, path generation)
- `@echoes-io/models` - **THIS PACKAGE** - Shared types and schemas
- `@echoes-io/tracker` - Content management API and database
- `@echoes-io/rag` - Semantic search and AI context
- `echoes-timeline-*` - Individual timeline content repositories
- `echoes-web-app` - Frontend application

## CONTENT HIERARCHY

```
Timeline (story universe)
├── Arc (story phase)
│   ├── Episode (story event)
│   │   ├── Part (optional subdivision)
│   │   │   └── Chapter (individual .md file)
```

**File Convention:**
`content/<arc-name>/<ep01-episode-title>/<ep01-ch001-pov-title>.md`

**Naming Rules:**
- Episode numbers: 2-digit padding (ep01, ep02, ep12)
- Chapter numbers: 3-digit padding (ch001, ch005, ch123)
- Slugification: lowercase, hyphens, no special chars

## CORE MODELS TO DEFINE

### Content Models
- `Timeline` - Root story container (id, name, description, metadata)
- `Arc` - Story arc within timeline (id, timelineId, name, description, order)
- `Episode` - Episode within arc (id, arcId, name, description, number)
- `Part` - Part within episode (id, episodeId, name, description, number)
- `Chapter` - Individual content file (id, partId, metadata, content, stats)

### Metadata Models
- `ChapterMetadata` - Frontmatter structure:
  - **Required**: pov (string), title (string), date (string), timeline (string), arc (string), episode (number), part (number), chapter (number), summary (string), location (string)
  - **Optional**: outfit (string), kink (string)
- `TextStats` - Text statistics: { words: number, characters: number, charactersNoSpaces: number, paragraphs: number, sentences: number, readingTimeMinutes: number }
- `PublishingInfo` - Publication status and timestamps

### API Models
- Request/response types for CRUD operations
- Validation schemas for all models
- Error types and status codes

## INTEGRATION WITH @echoes-io/utils

- **ChapterMetadata**: Should match the interface already defined in utils
- **TextStats**: Should match the interface from utils getTextStats()
- **Path generation**: Utils already handles file path conventions
- **Validation**: This package adds Zod schemas for runtime validation

## PRINCIPLES

- **Type-safe**: Strict TypeScript
- **Validated**: Zod schemas for runtime validation
- **Shared**: Used across all Echoes services
- **Minimal**: Only essential models
- **Extensible**: Easy to add new types
- **Compatible**: Must match @echoes-io/utils interfaces

## WORKFLOW

1. Define TypeScript interfaces in `lib/types/`
2. Create Zod validation schemas in `lib/schemas/`
3. Export from `lib/index.ts`
4. Write tests in `test/`
5. Update README with usage examples
6. Ensure compatibility with @echoes-io/utils types

## STYLE

- Clear, descriptive interface names
- Comprehensive JSDoc comments
- Consistent naming conventions
- Minimal but complete type definitions
- Match existing utils interfaces where applicable
