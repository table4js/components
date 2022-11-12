import React = require('react');
import { fireEvent, render, screen } from '@testing-library/react'

import { Table4TablePreheader } from '../../../sources/react/table/preheader';
import { ITableConfig, TableWidget } from '../../../sources/table';

jest.mock("../../../sources/react/table/search", () => ({
  AbrisSearch: (props) => {
    return "mock-table-search";
  }
}));

test("Table preheader render test", () => {
  let model = new TableWidget({ columns: [] } as any);
  const { container } = render(<Table4TablePreheader model={model} />);
  expect(container.firstChild).toMatchSnapshot();
});


