import { test, expect } from '@playwright/test';
import { initTable } from './helpers';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await initTable(page, { editMode: 'inplace' });
});

test.describe('Edit in row (inplace)', () => {
  test('edit and cancel', async ({ page }) => {
    const rows = await page.locator('.table4js__body tr');
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeHidden();

    await rows.nth(0).hover();
    await rows.nth(0).locator('.table4js__row-context-action').click();
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeVisible();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeVisible();

    const editor = await rows.nth(0).getByRole('textbox').nth(0);
    await expect(editor).toBeVisible();
    await expect(editor).toHaveValue('Brianna');

    await editor.fill('Helen');
    await editor.blur();
    await expect(editor).toHaveValue('Helen');
    await expect(editor).toHaveClass('table4js-editor table4js-editor--modified');

    await rows.nth(0).locator('.table4js__cancel-edit').click();
    await expect(editor).toBeHidden();
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js-cell__text').nth(0)).toHaveText('Brianna');
  });

  test('edit and save', async ({ page }) => {
    const rows = await page.locator('.table4js__body tr');
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeHidden();

    await rows.nth(0).hover();
    await rows.nth(0).locator('.table4js__row-context-action').click();
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeVisible();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeVisible();

    const editor = await rows.nth(0).getByRole('textbox').nth(0);
    await expect(editor).toBeVisible();
    await expect(editor).toHaveValue('Brianna');

    await editor.fill('Helen');
    await editor.blur();
    await expect(editor).toHaveValue('Helen');
    await expect(editor).toHaveClass('table4js-editor table4js-editor--modified');

    await rows.nth(0).locator('.table4js__save-edit').click();
    await expect(editor).toBeHidden();
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js-cell__text').nth(0)).toHaveText('Helen');
  });

  test('add and cancel', async ({ page }) => {
    const rows = await page.locator('.table4js__body tr');
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeHidden();

    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeVisible();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeVisible();

    const editor = await rows.nth(0).getByRole('textbox').nth(0);
    await expect(editor).toBeVisible();
    await expect(editor).toHaveValue('');

    await editor.fill('Helen');
    await editor.blur();
    await expect(editor).toHaveValue('Helen');
    await expect(editor).toHaveClass('table4js-editor table4js-editor--modified');

    await rows.nth(0).locator('.table4js__cancel-edit').click();
    await expect(editor).toBeHidden();
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js-cell__text').nth(0)).toHaveText('Brianna');
  });

  test('add and save', async ({ page }) => {
    const rows = await page.locator('.table4js__body tr');
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeHidden();

    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeVisible();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeVisible();

    const editor = await rows.nth(0).getByRole('textbox').nth(0);
    await expect(editor).toBeVisible();
    await expect(editor).toHaveValue('');

    await editor.fill('Helen');
    await editor.blur();
    await expect(editor).toHaveValue('Helen');
    await expect(editor).toHaveClass('table4js-editor table4js-editor--modified');

    await rows.nth(0).locator('.table4js__save-edit').click();
    await expect(editor).toBeHidden();
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__save-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js__cancel-edit')).toBeHidden();
    await expect(rows.nth(0).locator('.table4js-cell__text').nth(0)).toHaveText('Helen');
    await expect(rows.nth(0).locator('.table4js-cell__text').nth(1)).toHaveText('');
  });
});