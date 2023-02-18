import React = require('react');
import { fireEvent, render, screen } from '@testing-library/react'

import { Table4Preheader } from '../../../sources/react/table/preheader';
import { ITableConfig, Table } from '../../../sources/table';

jest.mock("../../../sources/react/table/search", () => ({
  Table4Search: (props) => {
    return "mock-table-search";
  }
}));

test("Table preheader render test", () => {
  let model = new Table({ columns: [] } as any);
  const { container } = render(<Table4Preheader model={model} />);
  expect(container.firstChild).toMatchSnapshot();
});


