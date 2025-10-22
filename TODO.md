# TODO

## Completed ✅

- [x] Define core content models (Timeline, Arc, Episode, Part, Chapter)
- [x] Define metadata models (ChapterMetadata, TextStats)
- [x] Create Zod validation schemas for all models
- [x] Implement validation functions
- [x] Write comprehensive tests
- [x] Document models with Mermaid diagrams and detailed tables
- [x] Ensure compatibility with @echoes-io/utils interfaces
- [x] Use composite primary keys with names (no auto-increment IDs)
- [x] Explode Chapter metadata and stats into flat structure
- [x] Use `Date` type instead of `string` for date fields
- [x] Add automatic conversion from string to Date in Zod schemas

## Future Enhancements

### Validation
- [ ] Add string length limits for fields (name, description, title, etc.)
- [ ] Add slug format validation (lowercase, hyphens, no special chars)
- [ ] Add cross-field validations (e.g., metadata fields match Chapter foreign keys)
- [ ] Add date format validation (ISO 8601 or custom patterns)
- [ ] Add episode/chapter number format validation (2-digit, 3-digit padding)

### API Models
- [ ] Define request/response types for CRUD operations (when implementing tracker API)
- [ ] Define query/filter types for complex searches (e.g., by POV, date range, location)
- [ ] Define pagination types
- [ ] Define error response types with codes

### RAG Integration
- [ ] Add fields for semantic search indexing (when implementing RAG service)
- [ ] Consider embedding/vector storage requirements
- [ ] Add content chunking metadata if needed

### Testing
- [ ] Increase test coverage to 100%
- [ ] Add integration tests with real markdown examples from timeline repos
- [ ] Add edge case tests (empty strings, boundary values, unicode, etc.)
- [ ] Add performance tests for validation with large datasets

### Documentation
- [ ] Add migration guide for existing content
- [ ] Add examples of common queries/operations
- [ ] Document database schema constraints (unique indexes, foreign keys)
- [ ] Add troubleshooting section

### Database Schema
- [ ] Define SQL/migration scripts for SQLite/PGLite (in tracker repo)
- [ ] Document indexes for performance
- [ ] Document cascading delete behavior

### Content Migration
- [ ] Create migration scripts for existing timeline content
- [ ] Validate all existing frontmatter against schemas
- [ ] Generate reports for invalid/missing data
