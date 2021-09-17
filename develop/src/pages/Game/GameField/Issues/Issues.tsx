import React from 'react';
import { FlexBox } from '../../../../shared/FlexBox';
import { IssuesList } from './IssuesList';
import { IssuesSettings } from './IssuesSettings';

export const Issues: React.FC = (): JSX.Element => {
  return (
    <FlexBox margin="0 0 120px 0">
      <IssuesList />
      <IssuesSettings />
    </FlexBox>
  );
};
