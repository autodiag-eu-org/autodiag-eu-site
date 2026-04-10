#!/usr/bin/env bash
set -euo pipefail

echo "=== QUALITY GATE ==="
echo ""

ERRORS=0

# 1. TypeScript strict check
echo "[1/4] TypeScript strict check..."
if npx tsc --noEmit 2>&1; then
  echo "  ✓ tsc --noEmit passed"
else
  echo "  ✗ tsc --noEmit FAILED"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# 2. Next.js build
echo "[2/4] Next.js build..."
if npx next build 2>&1; then
  echo "  ✓ next build passed"
else
  echo "  ✗ next build FAILED"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# 3. ESLint (Next 16 removed "next lint" — use eslint directly)
echo "[3/4] ESLint..."
if npx eslint . 2>&1; then
  echo "  ✓ eslint passed"
else
  echo "  ✗ eslint FAILED"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# 4. Check for console.log (excluding analytics.ts and scripts/)
echo "[4/4] Checking for console.log..."
CONSOLE_LOGS=$(grep -r "console\.log" --include="*.ts" --include="*.tsx" \
  --exclude="analytics.ts" \
  --exclude-dir="node_modules" \
  --exclude-dir=".next" \
  --exclude-dir="scripts" \
  . 2>/dev/null | wc -l)
if [ "$CONSOLE_LOGS" -gt 0 ]; then
  echo "  ✗ Found $CONSOLE_LOGS console.log statements (excluding analytics.ts and scripts/)"
  grep -r "console\.log" --include="*.ts" --include="*.tsx" \
    --exclude="analytics.ts" \
    --exclude-dir="node_modules" \
    --exclude-dir=".next" \
    --exclude-dir="scripts" \
    . 2>/dev/null || true
  ERRORS=$((ERRORS + 1))
else
  echo "  ✓ No console.log found"
fi
echo ""

# Summary
echo "=== RESULTS ==="
if [ "$ERRORS" -eq 0 ]; then
  echo "✓ All checks passed!"
  exit 0
else
  echo "✗ $ERRORS check(s) failed"
  exit 1
fi
