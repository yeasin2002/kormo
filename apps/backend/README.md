# Kormo Backend

NestJS backend with DrizzleORM and Better-Auth integration.

## Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL with Neon
- **ORM**: DrizzleORM with @sixaphone/nestjs-drizzle
- **Authentication**: Better-Auth
- **Language**: TypeScript

## Project Setup

1. Install dependencies:
```bash
pnpm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Configure your environment variables in `.env`:
```env
DATABASE_URL=your_neon_database_url
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3001
CORS_ORIGIN=http://localhost:3000
```

## Database Operations

```bash
# Push schema changes to database
pnpm run db:push

# Open Drizzle Studio
pnpm run db:studio

# Generate migrations
pnpm run db:generate

# Run migrations
pnpm run db:migrate
```

## Development

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start:prod
```

## API Endpoints

### Health Check
- `GET /api/health` - Health check endpoint

### Authentication
- `POST /api/auth/sign-in/email` - Email sign in
- `POST /api/auth/sign-up/email` - Email sign up
- `GET /api/auth/session` - Get current session
- All Better-Auth endpoints available at `/api/auth/*`

### Companies
- `GET /api/companies` - Get all companies
- `GET /api/companies/:name` - Get company by name
- `POST /api/companies` - Create new company
- `PUT /api/companies/:name` - Update company
- `DELETE /api/companies/:name` - Delete company

## Database Schema

### Auth Tables
- `user` - User accounts
- `session` - User sessions
- `account` - OAuth accounts
- `verification` - Email verification tokens

### Business Tables
- `companies` - Company information with technologies, locations, and ratings

## Architecture

The backend follows NestJS modular architecture:

- `src/database/` - Database configuration and schemas
- `src/auth/` - Authentication module with Better-Auth
- `src/companies/` - Companies CRUD operations
- `src/app.module.ts` - Main application module

## DrizzleORM Integration

Using `@sixaphone/nestjs-drizzle` for seamless DrizzleORM integration:

- Database client injection with `@InjectClient()`
- Repository pattern with `@InjectRepository()`
- Type-safe queries with full TypeScript support
- Multiple database connections support