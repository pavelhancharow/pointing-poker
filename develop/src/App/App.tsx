import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../store/reducer/userReducer';
import { Header } from '../components/Header';
import { Main } from '../pages/Main';
import { Footer } from '../components/Footer';

export const App: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const getDate = async (): Promise<{
    type: string;
    payload: never[];
  }> => {
    const rensponce = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await rensponce.json();
    return dispatch(userAction(data));
  };
  useEffect(() => {
    getDate();
  });

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
