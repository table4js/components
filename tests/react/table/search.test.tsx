import { fireEvent, render, screen} from '@testing-library/react'
import React = require('react');

import { AbrisComponentsTableSearch } from '../../../sources/react/table/search';
import { SearchModel } from '../../../sources/table/search';

test("Table search render test", () => {
  let model = new SearchModel();
  model.search("something");
  const { container } = render(<AbrisComponentsTableSearch model={model} />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Table search refresh test", () => {
  let model = new SearchModel();
  const { container } = render(<AbrisComponentsTableSearch model={model} />);
  fireEvent.change(container.querySelector("input"), { target: { value: "test search" } });
  fireEvent.click(screen.getByTitle("Search"));
  expect(model.searchValue).toBe("test search");
});

