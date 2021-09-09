import { FC } from 'react';
import { Authorize } from '../Authorize';

export const Main: FC = (): JSX.Element => {
  return (
    <main>
      <Authorize />
    </main>
  );
};
