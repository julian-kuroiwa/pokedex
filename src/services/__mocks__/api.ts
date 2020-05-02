import axios from 'axios';

const mockAxios = axios as jest.Mocked<typeof axios>;

mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
