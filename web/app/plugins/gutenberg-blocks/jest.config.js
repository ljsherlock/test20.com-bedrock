module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(ljsherlock-progressive-image)/)',
  ],
}
