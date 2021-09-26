import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Main } from '../pages/Main';
import { Footer } from '../components/Footer';
import { getUserInfo } from '../store/action-creaters/action-creaters';
import { Lobby } from '../pages/Lobby';

export const App: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserInfo(dispatch);
  });

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/lobby">
            <Lobby />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};
