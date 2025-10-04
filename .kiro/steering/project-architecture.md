---
inclusion: manual
---

# Project Architecture Guidelines

## System Architecture

This Better-T-Stack project follows a modern full-stack architecture with the following components:

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Layer**: oRPC for type-safe communication
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better-Auth with session management
- **Runtime**: Node.js

### Frontend Architecture
- **Web**: Next.js with React and TypeScript
- **Mobile**: React Native with NativeWind for styling
- **State Management**: Use React state and context appropriately
- **API Client**: Type-safe oRPC client integration

### Database Architecture
- **ORM**: Drizzle for type-safe database operations
- **Migrations**: Version-controlled schema changes
- **Connection**: Neon PostgreSQL hosting
- **Schema**: Organized in `apps/server/src/db/schema/`

## Monorepo Structure

### Workspace Organization
```
apps/
├── server/     # Express backend
├── web/        # Next.js web app
└── native/     # React Native mobile app

packages/       # Shared utilities and types
```

### Dependency Management
- Use pnpm workspaces for package management
- Share common dependencies through workspace configuration
- Maintain separate package.json for each application
- Use Turborepo for build orchestration

### Cross-Platform Considerations
- Share TypeScript types between applications
- Maintain consistent API contracts
- Use platform-specific implementations when needed
- Ensure authentication works across all platforms

## Integration Patterns

### API Integration
- Use oRPC for type-safe client-server communication
- Maintain consistent error handling patterns
- Implement proper request/response validation
- Use middleware for cross-cutting concerns

### Authentication Flow
- Implement session-based authentication with Better-Auth
- Maintain secure token handling
- Support authentication across web and mobile
- Handle authentication state consistently

### Data Flow
- Use Drizzle ORM for database operations
- Implement proper data validation
- Maintain referential integrity
- Use transactions for complex operations

## Scalability Considerations

### Performance Optimization
- Leverage Turborepo caching
- Implement efficient database queries
- Use appropriate bundling strategies
- Monitor application performance

### Code Organization
- Maintain clear separation of concerns
- Use consistent naming conventions
- Implement proper error boundaries
- Follow SOLID principles where applicable