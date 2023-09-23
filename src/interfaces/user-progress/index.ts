import { GetQueryInterface } from 'interfaces';

export interface UserProgressInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserProgressGetQueryInterface extends GetQueryInterface {
  id?: string;
}
