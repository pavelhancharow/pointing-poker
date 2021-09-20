import { FETCH_USER, UserAction, UserState } from '../types/todo';

const defaultStore: UserState = { users: [] };

export const userReducer = (state = defaultStore, action: UserAction): UserState => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export const userAction = (payload: never[]) => ({
  type: FETCH_USER,
  payload
});
