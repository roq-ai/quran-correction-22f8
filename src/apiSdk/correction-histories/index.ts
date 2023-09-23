import axios from 'axios';
import queryString from 'query-string';
import { CorrectionHistoryInterface, CorrectionHistoryGetQueryInterface } from 'interfaces/correction-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCorrectionHistories = async (
  query?: CorrectionHistoryGetQueryInterface,
): Promise<PaginatedInterface<CorrectionHistoryInterface>> => {
  const response = await axios.get('/api/correction-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCorrectionHistory = async (correctionHistory: CorrectionHistoryInterface) => {
  const response = await axios.post('/api/correction-histories', correctionHistory);
  return response.data;
};

export const updateCorrectionHistoryById = async (id: string, correctionHistory: CorrectionHistoryInterface) => {
  const response = await axios.put(`/api/correction-histories/${id}`, correctionHistory);
  return response.data;
};

export const getCorrectionHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/correction-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCorrectionHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/correction-histories/${id}`);
  return response.data;
};
