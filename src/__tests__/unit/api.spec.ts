import mockAxios from 'axios';
import api from '../../services/api';

interface Response {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
}

describe('API', () => {
  let data: Response[];
  let user: string;

  beforeEach(() => {
    user = 'julian-kuroiwa';
    data = [
      {
        id: 132935648,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=',
        name: 'boysenberry-repo-1',
        full_name: 'octocat/boysenberry-repo-1',
        private: false,
      },
      {
        id: 132935648,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=',
        name: 'boysenberry-repo-1',
        full_name: 'octocat/boysenberry-repo-1',
        private: false,
      },
    ];

    (mockAxios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(data),
    );
  });

  afterEach(() => {
    (mockAxios.get as jest.Mock).mockRestore();
  });

  it('should be called once', async () => {
    await api.get(user);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it('should be called with expected url', async () => {
    await api.get(user);
    expect(mockAxios.get).toHaveBeenCalledWith(`/users/${user}/repos`);
  });

  it('should return reps from the specific user', () => {
    return api.get(user).then((response) => {
      expect(response).toEqual(data);
    });
  });

  it('should return error when rejects', () => {
    (mockAxios.get as jest.Mock).mockRejectedValue(new Error('Async error'));

    return api.get(user).catch((err) => {
      expect(err).toBeCalledWith(new Error('Async error'));
    });
  });
});
