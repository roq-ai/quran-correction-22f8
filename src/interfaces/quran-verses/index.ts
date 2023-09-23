import { GetQueryInterface } from 'interfaces';

export interface QuranVersesInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface QuranVersesGetQueryInterface extends GetQueryInterface {
  id?: string;
}
