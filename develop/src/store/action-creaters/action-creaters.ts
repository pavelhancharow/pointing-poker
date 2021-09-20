import { Dispatch } from '@reduxjs/toolkit';
import { axiosInstance } from '../../services/api';
import { userAction } from '../reducer/userReducer';

export const getUserInfo = async (dispatch: Dispatch) => {
  // use fetch
  // const rensponce = await fetch('https://jsonplaceholder.typicode.com/users/');
  // const data = await rensponce.json();
  //  return dispatch(userAction(data));

  // or

  // use axios
  const rensponce = await axiosInstance.get('users');
  return dispatch(userAction(rensponce.data));
};
