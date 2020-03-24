import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';
import { episodes } from '../test-data';

test('renders Episodes without errors', () => {
  render(<Episodes episodes={[]}/>);
});

test ("Episodes renders episode list", () => {
  const { queryAllByTestId, rerender } = render(
    <Episodes episodes={[]} />
  );
  expect(queryAllByTestId(/episode-list/i)).toHaveLength(0);
  
  rerender(<Episodes episodes={episodes} />);
  expect(queryAllByTestId(/episode-list/i)).toHaveLength(8);
});
