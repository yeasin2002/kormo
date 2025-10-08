# Project Structure

## Root Directory
```
├── src/                 # Source code
├── dist/                # Compiled output
├── node_modules/        # Dependencies
├── test/                # E2E tests
├── .kiro/               # Kiro AI assistant configuration
├── .vscode/             # VS Code settings
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── nest-cli.json        # NestJS CLI configuration
└── .env                 # Environment variables (local only)
```

## Source Structure (`src/`)

### Module Organization
The application follows NestJS modular architecture with feature-based modules:

```
src/
├── main.ts              # Application entry point
├── app.module.ts        # Root module
├── app.controller.ts    # Root controller
├── app.service.ts       # Root service
├── auth/                # Authentication module
│   ├── auth.module.ts
│   ├── auth.controller.ts
│   └── auth.service.ts
├── users/               # Users module
│   ├── users.module.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.docs.ts    # OpenAPI documentation
│   ├── dto/             # Data Transfer Objects
│   └── entities/        # Entity definitions
├── db/                  # Database module
│   ├── db.module.ts
│   └── db.service.ts
└── lib/                 # Shared utilities/libraries
```

## Module Pattern
Each feature module follows the standard NestJS structure:
- `*.module.ts` - Module definition with imports, controllers, providers
- `*.controller.ts` - HTTP request handlers with route decorators
- `*.service.ts` - Business logic and data access
- `*.docs.ts` - OpenAPI/Swagger documentation (optional)
- `dto/` - Request/response data transfer objects
- `entities/` - Database entity definitions

## Key Conventions
- Feature modules are self-contained in their own directories
- Controllers handle HTTP layer, services contain business logic
- DTOs are used for request validation and response typing
- OpenAPI decorators (`@ApiTags`, `@ApiOperation`, `@ApiResponse`) document endpoints
- Spec file generation is disabled by default (`nest-cli.json`)
- Import modules in `app.module.ts` to register them
