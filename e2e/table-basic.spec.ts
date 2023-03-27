import { test, expect, type Page } from '@playwright/test';
import { initTable } from './helpers';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await initTable(page, {
    columns: [
      {   name: "id",
          visible: false,
      },
      {
          name: "first_name",
          title: "First Name"
      },
      {
          name: "last_name",
          title: "Last Name"
      },
      {
          name: "int16",
          title: "Number",
          type: "number"
      },
      {
        name: "iso-8601_date",
        type: "date",
        title: "Date",
      },
      {
          name: "float",
          type: "indicator",
          title: "Indicator",
      },
      {
          name: "uint16",
          type: "currency",
          title: "Currency",
      },
    ]
  });
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
    const columnHeader = await page.getByRole('cell', { name: 'Last Name' });
    const rows = await page.locator('.table4js__body tr');

    await expect(columnHeader.locator('svg').nth(0)).toBeHidden();
    await expect(columnHeader.locator('svg').nth(1)).toBeHidden();

    await expect(rows.nth(0).getByText('Adams')).toBeVisible();
    await expect(rows.nth(1).getByText('Cooper')).toBeVisible();
    await expect(rows.nth(2).getByText('Brooks')).toBeVisible();

    await page.getByText('Last Name').click();
    await expect(columnHeader.locator('svg').nth(0)).toBeVisible();
    await expect(columnHeader.locator('svg').nth(1)).toBeHidden();

    await expect(rows.nth(0).getByText('Adams')).toBeVisible();
    await expect(rows.nth(1).getByText('Adams')).toBeVisible();
    await expect(rows.nth(2).getByText('Adams')).toBeVisible();

    await page.getByText('Last Name').click();
    await expect(columnHeader.locator('svg').nth(0)).toBeHidden();
    await expect(columnHeader.locator('svg').nth(1)).toBeVisible();

    await expect(rows.nth(0).getByText('Young')).toBeVisible();
    await expect(rows.nth(1).getByText('Young')).toBeVisible();
    await expect(rows.nth(2).getByText('Young')).toBeVisible();

    await page.getByText('Last Name').click();
    await expect(columnHeader.locator('svg').nth(0)).toBeHidden();
    await expect(columnHeader.locator('svg').nth(1)).toBeHidden();

    await expect(rows.nth(0).getByText('Adams')).toBeVisible();
    await expect(rows.nth(1).getByText('Cooper')).toBeVisible();
    await expect(rows.nth(2).getByText('Brooks')).toBeVisible();
  });

  test('search', async ({ page }) => {
    await expect(page.getByText('Total: 1000')).toBeVisible();
    await page.getByPlaceholder('Search...').click();
    await page.getByPlaceholder('Search...').fill('Adams');
    await page.getByPlaceholder('Search...').press('Enter');
    await expect(page.getByText('Total: 11')).toBeVisible();
    await page.getByPlaceholder('Search...').click();
    await page.getByPlaceholder('Search...').fill('');
    await page.getByPlaceholder('Search...').press('Enter');
    await expect(page.getByText('Total: 1000')).toBeVisible();
  });

  test('filter by column', async ({ page }) => {
    const col2Header = await page.getByRole('cell', { name: 'Last Name' });
    await col2Header.hover();
    const columnFilter = await col2Header.locator('.table4js-title__filter');
    await columnFilter.click();
    
  });
});