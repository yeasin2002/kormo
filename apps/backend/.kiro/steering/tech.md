# Tech Stack

## Core Framework

- **NestJS 11.x** - Progressive Node.js framework
- **TypeScript 5.7.x** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Database & ORM

- **Drizzle ORM 0.44.x** - TypeScript ORM
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **@sixaphone/nestjs-drizzle** - NestJS Drizzle integration

## Authentication

- **Better Auth 1.3.x** - Authentication library
- **@thallesp/nestjs-better-auth** - NestJS Better Auth integration

## API Documentation

- **@nestjs/swagger** - OpenAPI/Swagger integration
- **@scalar/nestjs-api-reference** - Scalar API documentation UI
- **openapi-typescript** - TypeScript types from OpenAPI specs

## Development Tools

- **pnpm** - Package manager (preferred)
- **Jest** - Testing framework
- **ESLint** - Linting
- **Prettier** - Code formatting
- **ts-node** - TypeScript execution

## Common Commands

### Development

```bash
pnpm install          # Install dependencies
pnpm run dev          # Start in watch mode with OpenAPI spec generation
pnpm run start        # Start application
pnpm run start:debug  # Start with debugger
```

### Build & Production

```bash
pnpm run build        # Build for production
pnpm run start:prod   # Run production build
```

### Code Quality

```bash
pnpm run format       # Format code with Prettier
pnpm run lint         # Lint and fix code
```

### Testing

```bash
pnpm run test         # Run unit tests
pnpm run test:watch   # Run tests in watch mode
pnpm run test:cov     # Run tests with coverage
pnpm run test:e2e     # Run end-to-end tests
```

### API Types

```bash
pnpm run openapi      # Generate TypeScript types from OpenAPI spec
```

## Configuration Files

- `nest-cli.json` - NestJS CLI configuration (spec generation disabled by default)
- `tsconfig.json` - TypeScript configuration with decorators enabled
- `.prettierrc` - Single quotes, trailing commas
- `.editorconfig` - LF line endings, trim whitespace
- `.env` - Environment variables (not committed)
