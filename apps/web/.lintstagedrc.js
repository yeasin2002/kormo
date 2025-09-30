module.exports = {
  // Run lint:fix and format:fix on all JS/TS files
  '**/*.{js,jsx,ts,tsx}': ['pnpm run lint:fix', 'pnpm run format:fix'],
  // Run format:fix on other file types
  '**/*.{json,css,md}': ['pnpm run format:fix'],
};
