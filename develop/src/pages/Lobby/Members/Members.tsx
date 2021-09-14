import { FC } from 'react';
import { SectionBox } from '../style';
import { Title } from '../../../shared/Title';
import { Users } from './Users';

export const Members: FC = (): JSX.Element => (
  <SectionBox>
    <Title>Members:</Title>
    <Users />
  </SectionBox>
);
