import type { HttpMethod } from '@/common/enums';

/* ----------------------------- MENU DASHBOARD ----------------------------- */
export type MenuItemDashboard = {
  type?: 'divider' | 'group';
  label?: React.ReactNode;
  key: string;
  icon?: JSX.Element;
  children?: MenuItemDashboard[];
  path?: string;
  // roles: ROLE_TYPE[];
  // access?: PERMISSION_TYPE;
  isDisabled?: boolean;
};

/* ------------------------------ OPTION SELECT ----------------------------- */
export type IOption<T = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};

/* ---------------------------------- HTTP ---------------------------------- */
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export interface HttpRequest {
  url: string;
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: any;
  extraOptions?: Omit<RequestInit, 'body' | 'method' | 'headers'>;
}

interface IResponseMeta {
  total: number;
  page: number;
  size: number;
}
export interface HttpResponse<TData = any> {
  success: boolean;
  code?: number;
  message?: string;
  data: TData;
  meta?: IResponseMeta;
}

export interface HttpError<TData = any> {
  success: boolean;
  code?: number;
  message?: string;
  data?: TData;
  meta?: IResponseMeta;
}

/* ------------------------------- PAGINATION ------------------------------- */
export interface GetCommonDataRequest<T = any> {
  searchKey?: keyof T;
  searchValue?: string;
  sortKey?: string;
  sortValue?: string;
  skip?: number;
  take?: number;
}

export interface IDataSelect<T = any> {
  label: string;
  value: T;
  id: string | number;
}
