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
    const rows = await page.locator('.table4js__body tr');
    await expect(page.getByText('Total: 1000')).toBeVisible();
    await page.getByPlaceholder('Search...').click();
    await page.getByPlaceholder('Search...').fill('Adams');
    await page.getByPlaceholder('Search...').press('Enter');
    await expect(page.getByText('Total: 11')).toBeVisible();
    await expect(rows).toHaveCount(11);

    await page.getByPlaceholder('Search...').click();
    await page.getByPlaceholder('Search...').fill('');
    await page.getByPlaceholder('Search...').press('Enter');
    await expect(page.getByText('Total: 1000')).toBeVisible();
  });

  test('filter by column', async ({ page }) => {
    const rows = await page.locator('.table4js__body tr');
    const col1Header = await page.getByRole('cell', { name: 'First Name' });
    const col2Header = await page.getByRole('cell', { name: 'Last Name' });
    await col2Header.hover();
    const column2Filter = await col2Header.locator('.table4js-title__filter');
    await column2Filter.click();
    await expect(page.locator('.table4js-filter__content')).toHaveCount(1);
    await page.getByPlaceholder('*').click();
    await page.getByPlaceholder('*').fill('Adams');
    await page.getByPlaceholder('*').press('Enter');
    await expect(page.getByText('Total: 11')).toBeVisible();
    await expect(rows).toHaveCount(11);

    await col1Header.hover();
    const column1Filter = await col1Header.locator('.table4js-title__filter');
    await column1Filter.click();
    await expect(page.locator('.table4js-filter__content')).toHaveCount(2);
    await page.getByPlaceholder('*').first().click();
    await page.getByPlaceholder('*').first().fill('Henry');
    await page.getByPlaceholder('*').first().press('Enter');
    await expect(page.getByText('Total: 1')).toBeVisible();
    await expect(rows).toHaveCount(1);

    await page.locator('.table4js-filter__content').nth(1).locator('.table4js-filter__remove-icon').click();
    await expect(page.locator('.table4js-filter__content')).toHaveCount(1);
    await expect(page.getByText('Total: 4')).toBeVisible();
    await expect(rows).toHaveCount(4);

    await page.locator('.table4js-filter__content').nth(0).locator('.table4js-filter__remove-icon').click();
    await expect(page.locator('.table4js-filter__content')).toBeHidden();
    await expect(page.getByText('Total: 1000')).toBeVisible();
  });

  test('summary', async ({ page }) => {
    await expect(page.getByRole('row').filter({ hasText: '-NU-NU-Σx̄minmaxNU-minmaxNU-NU-Σx̄minmaxNU' }).locator('svg')).toBeHidden();
    await page.getByRole('button', { name: 'Summary' }).click();
    await expect(page.getByRole('row').filter({ hasText: '-NU-NU-Σx̄minmaxNU-minmaxNU-NU-Σx̄minmaxNU' }).locator('svg')).toBeVisible();

    await page.locator('.table4js-summary__select').nth(0).selectOption('count');
    await expect(page.getByRole('cell', { name: '1000' }).filter({ hasText: '1000-NU' })).toBeVisible();

    await page.locator('.table4js-summary__select').nth(2).selectOption('avg');
    await expect(page.getByText('-71.159')).toBeVisible();
  });
});