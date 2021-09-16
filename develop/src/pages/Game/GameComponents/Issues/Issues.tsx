import React from 'react';
import { FlexBox } from '../../../../shared/FlexBox';
import { TextContainer } from '../../Style/Style';
import { IssuesCardCreate } from './IssuesComponents/IssuesCardCreate/IssuesCardCreate';
import { IssuesList } from './IssuesComponents/IssuesList/IssuesList';

export const Issues: React.FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="60px 0 330px 0">
      <FlexBox margin="0 0 40px 120px">
        <TextContainer>Issues:</TextContainer>
      </FlexBox>
      <IssuesList />
    </FlexBox>
  );
};
