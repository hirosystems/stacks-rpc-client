if (process.env.SKIP_TESTS) {
  console.log('Skipping tests...');
  process.exit(0);
}

module.exports = packageDirname => {
  return {
    rootDir: packageDirname,
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: './coverage/',
    collectCoverage: true,
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.json',
        diagnostics: {
          ignoreCodes: ['TS151001'],
        },
      },
    },
    moduleFileExtensions: ['js', 'ts', 'd.ts'],
    setupFilesAfterEnv: ['./config/jest.setup.js'],
    testTimeout: 10_000,
  };
};
