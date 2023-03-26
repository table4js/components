import { test, expect, type Page } from '@playwright/test';
import { initTable } from './helpers';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await initTable(page);
});

test.describe('Basic functionality', () => {

  test('table header has controls', async ({ page }) => {
    await page.locator('.table4js-search').isVisible();
    await page.getByRole('button', { name: 'summary-action' }).isVisible();
    await page.getByRole('button', { name: 'mergedСells-action' }).isVisible();
  });

  test('number column', async ({ page }) => {
    await page.getByRole('cell', { name: '#' }).isVisible();
    await expect(page.locator('.table4js__check').first()).toBeVisible();
    await page.getByRole('cell', { name: '#' }).click();
    await expect(page.locator('.table4js__number').first()).toHaveText('1');
  });

  test('column order', async ({ page }) => {
    await expect(page.getByRole('cell', { name: 'Last Name' }).locator('svg').first()).toBeHidden();
    const rows = await page.locator('.table4js__body tr');
    await expect(rows.nth(1).getByText('Adams').first()).toBeVisible();
    await expect(rows.nth(2).getByText('Cooper').first()).toBeVisible();
    await expect(rows.nth(3).getByText('Brooks').first()).toBeVisible();
    const col2Header = await page.getByText('Last Name');
    
    // await col2Header.click();
    // await expect(page.getByRole('cell', { name: 'Last Name' }).locator('svg').first()).toBeVisible();
    // await expect(page.getByRole('row').nth(1).getByText('Adams')).toBeVisible();
    // await expect(page.getByRole('row').nth(2).getByText('Adams')).toBeVisible();
    // await expect(page.getByRole('row').nth(3).getByText('Adams')).toBeVisible();
  });

});