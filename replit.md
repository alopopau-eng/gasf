# replit.md

## Overview

تأمينك (Ta'minak) is an Arabic-language insurance comparison and quote request platform. The application serves as a broker connecting users with licensed insurance companies, offering comparison services for car, health, home, travel, and life insurance. Users can browse insurance services, view company statistics, and submit quote requests through a contact form. The platform features RTL (right-to-left) layout support for Arabic content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state and caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming, custom IBM Plex Sans Arabic font for Arabic text
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful JSON API with endpoints under /api prefix
- **Validation**: Zod schemas with drizzle-zod integration for type-safe request validation
- **Error Handling**: Structured error responses with Arabic error messages

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Current Storage**: In-memory storage class (MemStorage) with interface for future database swap
- **Database Ready**: PostgreSQL schema defined, DATABASE_URL environment variable expected
- **Migrations**: Drizzle Kit for schema migrations (output to ./migrations)

### Shared Code
- Schema definitions in shared/schema.ts are used by both frontend and backend
- Type exports (InsertUser, User, InsertQuoteRequest, QuoteRequest) ensure type safety across the stack
- Zod validation schemas are shared for consistent validation

### Development vs Production
- **Development**: Vite dev server with HMR, runs via tsx
- **Production**: Vite builds static assets to dist/public, esbuild bundles server to dist/index.cjs

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires DATABASE_URL environment variable)
- **connect-pg-simple**: Session storage for PostgreSQL (available but not currently used)

### UI Framework
- **Radix UI**: Full suite of accessible, unstyled UI primitives (accordion, dialog, dropdown, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Icon library

### Form & Validation
- **Zod**: Schema validation library
- **React Hook Form**: Form state management
- **drizzle-zod**: Generate Zod schemas from Drizzle table definitions

### Build & Development
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)