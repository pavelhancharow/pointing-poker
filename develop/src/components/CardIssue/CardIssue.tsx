import { FC } from 'react';
import { Close } from '@material-ui/icons';
import { IssueContainer, TextContainer } from './CardIssueStyled';
import { FlexBox } from '../../shared/FlexBox';

export const CardIssue: FC = (): JSX.Element => {
  return (
    <IssueContainer flexDirection="column" justifyContent="center" padding="0 10px">
      <FlexBox justifyContent="space-between">
        <FlexBox width="120px">
          <TextContainer fontSize="26px">Issue</TextContainer>
          <TextContainer fontSize="26px">321</TextContainer>
        </FlexBox>
        <Close fontSize="large" color="action" />
      </FlexBox>
      <TextContainer fontSize="10px" lineHeight="12px">
        Low prority
      </TextContainer>
    </IssueContainer>
  );
};
