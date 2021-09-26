import { FC } from 'react';
import { Container } from '../../shared/style/Container';
import { Authorize } from '../Authorize';

export const Main: FC = (): JSX.Element => {
  return (
    <main>
      <Container standard>
        <Authorize />
      </Container>
    </main>
  );
};
