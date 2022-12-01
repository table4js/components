import { test, expect } from '@playwright/test';

test.describe('Basic functionality', () => {

  test('table header has controls', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.locator('.abris-search').isVisible();
    await page.getByRole('button', { name: 'summary-action' }).isVisible();
    await page.getByRole('button', { name: 'mergedСells-action' }).isVisible();
  });

  test('number column', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.getByRole('cell', { name: '#' }).isVisible();
    await expect(page.locator('.abris-table__check').first()).toBeVisible();
    await page.getByRole('cell', { name: '#' }).click();
    await expect(page.locator('.abris-table__number').first()).toHaveText('1');
  });

});