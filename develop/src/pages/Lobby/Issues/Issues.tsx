import { FC } from 'react';
import { SectionBox } from '../style';
import { IssuesContainer } from './IssuesContainer';
import { Title } from '../../../shared/Title';

export const Issues: FC = (): JSX.Element => (
  <SectionBox>
    <Title>Issues:</Title>
    <IssuesContainer />
  </SectionBox>
);
