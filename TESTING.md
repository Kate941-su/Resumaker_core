# Testing Guide

This document explains how to run and write tests for the PDF Resume Generator.

## 🚀 Running Tests

### Install Dependencies

```bash
npm install
```

### Run All Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

## 📁 Test Structure

```
src/
├── types/
│   ├── __tests__/
│   │   └── resume.test.ts          # Validation logic tests
│   └── resume.ts                   # Source code being tested
├── components/
│   └── __tests__/                  # Component tests (future)
└── setupTests.ts                   # Global test setup
```

## 🧪 Test Categories

### Validation Tests (`resume.test.ts`)

The validation tests cover the `safeMapResumeData` function with comprehensive test cases:

#### ✅ Valid Data Tests

- Complete valid resume data
- Minimal valid resume data
- Data with optional fields missing

#### ❌ Invalid Personal Info Tests

- Missing name
- Missing email
- Missing location
- Missing personal_info object
- Null personal_info

#### ❌ Invalid Experience Tests

- Missing title
- Missing company
- Missing startDate
- Missing current field
- Empty array validation

#### ❌ Invalid Education Tests

- Missing degree
- Missing field
- Missing school
- Missing startDate
- Missing current field

#### ❌ Invalid Skills Tests

- Missing name
- Missing category
- Missing level

#### ❌ Invalid Others/Projects Tests

- Missing name
- Missing description
- Missing tags

#### 🔍 Edge Cases

- Undefined arrays
- Null arrays
- Mixed valid/invalid data
- Empty strings
- Boolean values

## 📊 Test Coverage

The tests aim for comprehensive coverage of:

- **Happy Path**: All valid data scenarios
- **Error Cases**: All invalid data scenarios
- **Edge Cases**: Boundary conditions and unusual inputs
- **Type Safety**: Proper handling of different data types

## 🛠️ Writing New Tests

### Test File Structure

```typescript
import { safeMapResumeData } from "../resume";

describe("FunctionName", () => {
  describe("Test Category", () => {
    it("should do something specific", () => {
      // Arrange
      const input = {
        /* test data */
      };

      // Act & Assert
      expect(() => safeMapResumeData(input)).not.toThrow();
    });
  });
});
```

### Test Naming Convention

- Use descriptive test names
- Group related tests with `describe` blocks
- Use "should" statements for behavior
- Include the expected outcome in the name

### Example Test

```typescript
it("should throw error when name is missing", () => {
  const invalidData = {
    personal_info: {
      email: "test@example.com",
      location: "San Francisco, CA",
    },
    // ... other required fields
  };

  expect(() => safeMapResumeData(invalidData)).toThrow("Invalid personal info");
});
```

## 🔧 Test Configuration

### Jest Configuration (`jest.config.js`)

- Uses TypeScript preset
- Node environment for validation tests
- Coverage collection enabled
- Path mapping for `@/` imports

### Setup File (`setupTests.ts`)

- Global test setup
- Console mocking (optional)
- Mock cleanup between tests

## 📈 Coverage Reports

After running `npm run test:coverage`, you'll get:

- **Terminal Output**: Summary of coverage percentages
- **HTML Report**: Detailed coverage in `coverage/lcov-report/index.html`
- **LCOV Report**: For CI/CD integration

### Coverage Goals

- **Statements**: > 90%
- **Branches**: > 85%
- **Functions**: > 90%
- **Lines**: > 90%

## 🐛 Debugging Tests

### Common Issues

1. **Import Errors**

   - Check path mappings in `jest.config.js`
   - Ensure TypeScript paths are correct

2. **Type Errors**

   - Run `npm run build` to check TypeScript compilation
   - Ensure all types are properly exported

3. **Test Failures**
   - Check console output for detailed error messages
   - Use `console.log` for debugging (remove before committing)

### Debug Commands

```bash
# Run specific test file
npm test resume.test.ts

# Run tests with verbose output
npm test -- --verbose

# Run tests matching pattern
npm test -- --testNamePattern="should validate"
```

## 🚀 CI/CD Integration

### GitHub Actions Example

```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm install
      - run: npm test
      - run: npm run test:coverage
```

## 📝 Best Practices

1. **Test Isolation**: Each test should be independent
2. **Clear Assertions**: Use specific error messages
3. **Comprehensive Coverage**: Test both valid and invalid cases
4. **Edge Cases**: Test boundary conditions
5. **Maintainability**: Keep tests simple and readable

## 🔄 Continuous Testing

- Run tests before committing: `npm test`
- Use watch mode during development: `npm run test:watch`
- Check coverage regularly: `npm run test:coverage`
- Fix failing tests immediately
- Add tests for new features

---

**Happy Testing! 🧪✨**
