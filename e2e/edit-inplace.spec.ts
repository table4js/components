import { test, expect } from '@playwright/test';
import { initTable } from './helpers';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await initTable(page, { editMode: 'inplace' });
});

test.describe('Edit in row (inplace)', () => {
  test('test', async ({ page }) => {
  });
});