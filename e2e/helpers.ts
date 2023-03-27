import { test, expect, type Page } from '@playwright/test';

export async function initTable(page: Page, options?: any) {
    return await page.waitForFunction(o => {
      var w = window as any;
      Object.keys(o || {}).forEach(optionKey => w.options[optionKey] = o[optionKey]);
      var model = new w.Table4JS.Table(w.options);
      model.data = w.sampleData;
      
      const root = w.ReactDOM.createRoot(document.getElementById("table-container"));
      root.render(w.React.createElement(w.Table4JS.Table4, { model: model }));
      return true;
    }, options);
  }