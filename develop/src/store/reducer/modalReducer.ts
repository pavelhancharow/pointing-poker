import { useSelector } from 'react-redux';
import { MODAL, ModalState, UserAction } from '../types/todo';

const defaultStore: ModalState = { modal: false };

export const modalReducer = (state = defaultStore, action: UserAction): ModalState => {
  switch (action.type) {
    case MODAL:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};

export const modalAction = (isModalState: boolean) => ({
  type: MODAL,
  payload: !isModalState
});
