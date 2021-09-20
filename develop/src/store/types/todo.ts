export const FETCH_USER = 'FETCH_USER';

export interface UserState {
  users: never[] | undefined;
}

export interface FetchUserAction {
  type: typeof FETCH_USER;
  payload?: never[];
}

export type UserAction = FetchUserAction;
