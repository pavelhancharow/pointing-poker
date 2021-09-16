import React from 'react';
import { FlexBox } from '../../../../../../shared/FlexBox';
import { IssuesCard } from '../IssuesCard/IssuesCard';
import { IssuesCardCreate } from '../IssuesCardCreate/IssuesCardCreate';

const TEMP_ARRAY = [1, 2, 3, 4, 5];

export const IssuesList: React.FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="40px 0 0 64px">
      {TEMP_ARRAY.map((elem) => (
        <IssuesCard key={elem} />
      ))}
      <IssuesCardCreate />
    </FlexBox>
  );
};
