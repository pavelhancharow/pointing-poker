import React from 'react';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Title } from '../../../../../shared/Title';
import { IssuesCard } from './IssuesCard';
import { IssuesCardCreate } from './IssuesCardCreate';

export const IssuesList: React.FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 46px 0 0">
      <Title marginBottom="38px">Issues:</Title>
      <FlexBox flexDirection="column">
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
        <IssuesCardCreate />
      </FlexBox>
    </FlexBox>
  );
};
