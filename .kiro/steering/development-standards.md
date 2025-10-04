# Development Standards

## Code Style and Quality

### Formatting and Linting
- **Biome**: Primary code formatter and linter
- **Oxlint**: Additional linting for enhanced code quality
- **Configuration**: Follow settings in `biome.json` and `.oxlintrc.json`
- **Pre-commit**: Husky ensures code quality before commits

### TypeScript Standards
- Use strict TypeScript configuration
- Maintain type safety across all applications
- Leverage oRPC for type-safe API contracts
- Run `pnpm run check-types` before commits

### Database Standards
- Use Drizzle ORM for all database operations
- Define schemas in `apps/server/src/db/schema/`
- Use migrations for schema changes
- Follow PostgreSQL best practices

### API Development
- Use oRPC for type-safe API endpoints
- Structure endpoints in `apps/server/src/api/`
- Maintain consistent error handling
- Document API contracts through TypeScript types

### Mobile Development
- Use NativeWind for styling in React Native
- Maintain platform-specific considerations
- Share business logic between web and native when possible
- Use Better-Auth client for authentication

### Testing Standards
- Write unit tests for business logic
- Test API endpoints thoroughly
- Include integration tests for critical flows
- Use TypeScript for test files

### Git Workflow
- Use conventional commit messages
- Leverage pre-commit hooks for quality checks
- Keep commits focused and atomic
- Use meaningful branch names

## Performance Guidelines

### Turborepo Optimization
- Leverage build caching effectively
- Use appropriate task dependencies
- Optimize parallel execution
- Monitor build performance

### Database Performance
- Use appropriate indexes
- Optimize queries through Drizzle
- Monitor query performance
- Use connection pooling

### Frontend Performance
- Optimize bundle sizes
- Use appropriate caching strategies
- Implement lazy loading where beneficial
- Monitor Core Web Vitals