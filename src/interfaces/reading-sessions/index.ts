import { GetQueryInterface } from 'interfaces';

export interface ReadingSessionsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ReadingSessionsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
