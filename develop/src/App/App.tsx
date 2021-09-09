import { FC } from 'react';
import { Header } from '../components/Header';
import { Main } from '../pages/Main';
import { Footer } from '../components/Footer';

export const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
