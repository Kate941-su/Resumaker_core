// Jest setup file
// This file is run before each test file

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  // Uncomment to ignore a specific log level
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};

// Add any global test setup here
beforeEach(() => {
  // Reset any mocks before each test
  jest.clearAllMocks();
});
