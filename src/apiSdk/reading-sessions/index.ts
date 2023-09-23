import axios from 'axios';
import queryString from 'query-string';
import { ReadingSessionsInterface, ReadingSessionsGetQueryInterface } from 'interfaces/reading-sessions';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getReadingSessions = async (
  query?: ReadingSessionsGetQueryInterface,
): Promise<PaginatedInterface<ReadingSessionsInterface>> => {
  const response = await axios.get('/api/reading-sessions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createReadingSessions = async (readingSessions: ReadingSessionsInterface) => {
  const response = await axios.post('/api/reading-sessions', readingSessions);
  return response.data;
};

export const updateReadingSessionsById = async (id: string, readingSessions: ReadingSessionsInterface) => {
  const response = await axios.put(`/api/reading-sessions/${id}`, readingSessions);
  return response.data;
};

export const getReadingSessionsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/reading-sessions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteReadingSessionsById = async (id: string) => {
  const response = await axios.delete(`/api/reading-sessions/${id}`);
  return response.data;
};
