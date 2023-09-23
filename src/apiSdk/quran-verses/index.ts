import axios from 'axios';
import queryString from 'query-string';
import { QuranVersesInterface, QuranVersesGetQueryInterface } from 'interfaces/quran-verses';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getQuranVerses = async (
  query?: QuranVersesGetQueryInterface,
): Promise<PaginatedInterface<QuranVersesInterface>> => {
  const response = await axios.get('/api/quran-verses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createQuranVerses = async (quranVerses: QuranVersesInterface) => {
  const response = await axios.post('/api/quran-verses', quranVerses);
  return response.data;
};

export const updateQuranVersesById = async (id: string, quranVerses: QuranVersesInterface) => {
  const response = await axios.put(`/api/quran-verses/${id}`, quranVerses);
  return response.data;
};

export const getQuranVersesById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/quran-verses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteQuranVersesById = async (id: string) => {
  const response = await axios.delete(`/api/quran-verses/${id}`);
  return response.data;
};
