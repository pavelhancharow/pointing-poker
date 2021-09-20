import { Dispatch } from '@reduxjs/toolkit';
import { userAction } from '../reducer/userReducer';

export const getUserInfo = async (dispatch: Dispatch) => {
  const rensponce = await fetch('https://jsonplaceholder.typicode.com/users/');
  const data = await rensponce.json();
  return dispatch(userAction(data));
};
