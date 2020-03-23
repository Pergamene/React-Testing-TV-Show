import { formatSeasons } from './formatSeasons';
import { resEpisodes, formatedEpisodes } from '../test-data';

test('formatSeasons returns expected result', () => {
  expect(formatSeasons(resEpisodes)).toEqual(formatedEpisodes);
});
