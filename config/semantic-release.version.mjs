/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  dryRun: true,
  debug: true,
  branches: ['main', { name: 'next', prerelease: true }],
  plugins: [
    '@semantic-release/release-notes-generator',
    // '@semantic-release/npm',
    // '@semantic-release/github',
  ],
};
