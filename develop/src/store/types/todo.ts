export const FETCH_USER = 'FETCH_USER';
export const MODAL = 'MODAL';

export interface RootState {
  userReducer: UserState;
  modalReducer: ModalState;
}
export interface UserState {
  users: never[] | undefined;
}

export interface ModalState {
  modal: boolean;
}

export interface FetchUserAction {
  type: typeof FETCH_USER;
  payload?: never[];
}

export interface ModalAction {
  type: typeof MODAL;
  payload: boolean;
}
// add new interface
export type UserAction = FetchUserAction | ModalAction;
