import React = require('react');
import { fireEvent, render, screen} from '@testing-library/react'

import { Table4Search } from '../../../sources/react/table/search';
import { SearchModel } from '../../../sources/table/search';

test("Table search render test", () => {
  let model = new SearchModel();
  model.search("something");
  const { container } = render(<Table4Search searchModel={model} icon={null} />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Table search refresh test", () => {
  let model = new SearchModel();
  const { container } = render(<Table4Search searchModel={model} icon={null} />);
  fireEvent.change(container.querySelector("input"), { target: { value: "test search" } });
  fireEvent.click(screen.getByTitle("Search"));
  expect(model.searchValue).toBe("test search");
});

