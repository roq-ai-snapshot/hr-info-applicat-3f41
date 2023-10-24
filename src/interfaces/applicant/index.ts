import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApplicantInterface {
  id?: string;
  cv_link: string;
  status: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ApplicantGetQueryInterface extends GetQueryInterface {
  id?: string;
  cv_link?: string;
  status?: string;
  user_id?: string;
}
