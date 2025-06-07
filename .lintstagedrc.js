module.exports = {
  // Run lint:fix and format:fix on all JS/TS files
  '**/*.{js,jsx,ts,tsx}': ['bun run lint:fix', 'bun run format:fix'],
  // Run format:fix on other file types
  '**/*.{json,css,md}': ['bun run format:fix'],
};
