# Better-T-Stack Project Guidelines

## Project Overview

This is a Better-T-Stack monorepo project with the following technology stack:

- **Database**: PostgreSQL with Neon hosting
- **ORM**: Drizzle ORM
- **Backend**: Express.js with Node.js runtime
- **API**: oRPC for type-safe API communication
- **Frontend**: Next.js web app + React Native mobile app with NativeWind
- **Authentication**: Better-Auth
- **Package Manager**: pnpm with Turborepo for monorepo management
- **Code Quality**: Biome formatter, Oxlint linter, Husky git hooks

## Development Standards

### Monorepo Structure
- `apps/server/` - Express backend server
- `apps/web/` - Next.js web application  
- `apps/native/` - React Native mobile app with NativeWind
- `packages/` - Shared packages and utilities

### Database Operations
All database commands must be run from the server workspace:
- Use `pnpm run db:push` for schema changes
- Use `pnpm run db:studio` to open database studio
- Use `pnpm run db:generate` to generate Drizzle files
- Use `pnpm run db:migrate` for database migrations
- Schema files are located in `apps/server/src/db/schema/`

### API Development
- oRPC endpoints go in `apps/server/src/api/`
- Client-side API utilities in `apps/web/src/utils/api.ts`
- Maintain type safety across client-server boundaries
- Use oRPC for all API communication to ensure type safety

### Authentication
- Server auth logic in `apps/server/src/lib/auth.ts`
- Native app auth client in `apps/native/src/lib/auth-client.ts`
- Use Better-Auth for consistent authentication across platforms

### Code Quality Standards
- Run `pnpm run check` for linting with Oxlint
- Run `pnpm run format` for code formatting with Biome
- Pre-commit hooks are configured with Husky
- All code must pass type checking with `pnpm run check-types`

### Development Workflow
- Use `pnpm run dev` to start web and server in development
- Use `pnpm run dev:native` for mobile development
- Use workspace-specific commands for targeted development
- Leverage Turborepo's caching and parallel execution

### Build and Deployment
- Use `pnpm run build` for full project build
- Use `pnpm run build:web` or `pnpm run build:server` for specific builds
- Currently no deployment configurations are set up

## File References

#[[file:bts.jsonc]] - Better-T-Stack configuration
#[[file:turbo.json]] - Turborepo configuration
#[[file:package.json]] - Root package configuration