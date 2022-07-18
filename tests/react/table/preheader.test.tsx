import { fireEvent, render, screen} from '@testing-library/react'
import React = require('react');

import { AbrisComponentsTablePreheader } from '../../../sources/react/table/preheader';
import { ITableConfig, TableWidget } from '../../../sources/table';

jest.mock("../../../sources/react/table/search", () => ({
  AbrisComponentsTableSearch: (props) => {
    return "mock-table-search";
  }
}));

test("Table preheader render test", () => {
  let model = new TableWidget({columns: []} as any);
  const { container } = render(<AbrisComponentsTablePreheader model={model} />);
  expect(container.firstChild).toMatchSnapshot();
});


