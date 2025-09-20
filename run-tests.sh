#!/bin/bash

# PDF Resume Generator Test Runner
# This script provides an easy way to run tests with different options

echo "🧪 PDF Resume Generator Test Runner"
echo "=================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Parse command line arguments
case "${1:-all}" in
    "all")
        echo "🚀 Running all tests..."
        npm test
        ;;
    "watch")
        echo "👀 Running tests in watch mode..."
        npm run test:watch
        ;;
    "coverage")
        echo "📊 Running tests with coverage..."
        npm run test:coverage
        ;;
    "validation")
        echo "✅ Running validation tests only..."
        npm test -- --testPathPattern=resume.test.ts
        ;;
    "help"|"-h"|"--help")
        echo "Usage: ./run-tests.sh [option]"
        echo ""
        echo "Options:"
        echo "  all        Run all tests (default)"
        echo "  watch      Run tests in watch mode"
        echo "  coverage   Run tests with coverage report"
        echo "  validation Run only validation tests"
        echo "  help       Show this help message"
        ;;
    *)
        echo "❌ Unknown option: $1"
        echo "Run './run-tests.sh help' for usage information"
        exit 1
        ;;
esac

echo ""
echo "✅ Test run completed!"
