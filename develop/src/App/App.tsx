import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../components/Header';
import { Main } from '../pages/Main';
import { Footer } from '../components/Footer';
import { getUserInfo } from '../store/action-creaters/action-creaters';

export const App: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserInfo(dispatch);
  });

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
