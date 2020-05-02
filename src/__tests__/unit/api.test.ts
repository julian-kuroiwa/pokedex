/* eslint-disable @typescript-eslint/camelcase */

import api from '../../services/api';

describe('api', () => {
  let data;
  let pokemon;

  beforeEach(() => {
    pokemon = 'pikachu';
    data = {
      base_experience: 112,
      height: 4,
      id: 25,
      is_default: true,
      location_area_encounters:
        'https://pokeapi.co/api/v2/pokemon/25/encounters',
      name: 'pikachu',
      order: 35,
      weight: 60,
    };
    jest.spyOn(api, 'get').mockResolvedValueOnce(data);
  });

  afterEach(() => {
    jest.spyOn(api, 'get').mockRestore();
  });

  it('should be called once', async () => {
    await api.get('/');

    expect(api.get).toHaveBeenCalledTimes(1);
  });

  it('should be called with expected url', async () => {
    await api.get(pokemon);
    expect(api.get).toHaveBeenCalledWith(`${pokemon}`);
  });

  it('should return reps from the specific pokemon', async () => {
    const response = await api.get(pokemon);

    expect(response).toEqual(data);
  });

  it('should return error when rejects', () => {
    jest.spyOn(api, 'get').mockRejectedValue(new Error('Async error'));

    return api.get(pokemon).catch(err => {
      expect(err).toBeCalledWith(new Error('Async error'));
    });
  });
});
