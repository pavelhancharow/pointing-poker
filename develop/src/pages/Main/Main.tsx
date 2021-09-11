import { FC } from 'react';
import { Container } from '../../shared/Container';
import { Authorize } from '../Authorize';

export const Main: FC = (): JSX.Element => {
  return (
    <main>
      <Container maxWidth="1000px">
        <Authorize />
      </Container>
    </main>
  );
};
