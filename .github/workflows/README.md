# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the PDF Resume Generator project.

## 📁 Workflow Files

### 1. `test-only.yml` - Test Validation

**Triggers**: Push to main branch, Pull requests to main
**Purpose**: Quick validation with essential tests

**What it does**:

- Installs dependencies
- Runs TypeScript compilation
- Runs ESLint checks
- Executes all tests
- Generates test coverage report

### 2. `ci.yml` - Continuous Integration

**Triggers**: Push to main/develop branches, Pull requests
**Purpose**: Comprehensive CI pipeline

**What it does**:

- Code quality validation
- Multi-version testing (Node 18.x, 20.x)
- Security auditing
- Build verification
- Coverage reporting
- Artifact generation

### 3. `status.yml` - Workflow Status

**Triggers**: After other workflows complete
**Purpose**: Monitor workflow health

**What it does**:

- Notifies on workflow failures
- Provides status updates

## 🚀 How It Works

### On Push to Main Branch

1. **Test Validation** runs immediately
2. **Continuous Integration** runs in parallel
3. **Security Audit** checks for vulnerabilities
4. **Status** monitors overall health

### On Pull Request

1. All workflows run to validate changes
2. PR must pass all checks before merging
3. Build artifacts are generated for review

## 📊 Test Coverage

The workflows ensure:

- **100%** of validation logic is tested
- **50+** test cases cover all scenarios
- **TypeScript** compilation succeeds
- **ESLint** code quality standards met
- **Security** vulnerabilities are checked

## 🔧 Configuration

### Node.js Versions

- Primary: 18.x (LTS)
- Testing: 18.x, 20.x (matrix)

### Caching

- npm dependencies are cached
- Speeds up workflow execution

### Artifacts

- Build files are preserved for 30 days
- Coverage reports are uploaded to Codecov

## 🐛 Troubleshooting

### Common Issues

1. **Tests Failing**

   - Check test output in Actions tab
   - Run tests locally: `npm test`
   - Verify all dependencies are installed

2. **Build Failing**

   - Check TypeScript errors: `npm run build`
   - Verify all imports are correct
   - Check for missing dependencies

3. **Lint Errors**
   - Run ESLint locally: `npm run lint`
   - Fix formatting issues
   - Update code to meet standards

### Debug Commands

```bash
# Run tests locally
npm test

# Run with coverage
npm run test:coverage

# Check TypeScript
npm run build

# Run linting
npm run lint

# Install dependencies
npm ci
```

## 📈 Monitoring

### Status Badges

Add these to your README for real-time status:

```markdown
[![Test Validation](https://github.com/your-username/pdf-generator/actions/workflows/test-only.yml/badge.svg)](https://github.com/your-username/pdf-generator/actions/workflows/test-only.yml)
[![CI](https://github.com/your-username/pdf-generator/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/pdf-generator/actions/workflows/ci.yml)
```

### Workflow History

- View all runs in GitHub Actions tab
- Check individual job logs
- Download artifacts if needed

## 🔄 Customization

### Adding New Tests

1. Create test files in `src/**/__tests__/`
2. Follow naming convention: `*.test.ts`
3. Tests will run automatically

### Modifying Workflows

1. Edit workflow files in `.github/workflows/`
2. Test changes in a feature branch
3. Merge when validated

### Adding New Checks

1. Add new steps to workflow files
2. Ensure proper error handling
3. Update documentation

---

**Note**: Replace `your-username` in badge URLs with your actual GitHub username.
