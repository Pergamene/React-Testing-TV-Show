import React from 'react';
import { render, waitFor } from '@testing-library/react';

import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { res } from './test-data';

jest.mock('./api/fetchShow');

test('api call', async () => {
  mockFetchShow.mockResolvedValueOnce(res);
  
  render(<App />);

  await waitFor(() => {
    expect(mockFetchShow).toHaveBeenCalledTimes(1);
  });
});
