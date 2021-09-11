import { FC } from 'react';
import { Add } from '@material-ui/icons';
import { IssueContainer, TextContainer } from '../CardIssueStyled';
import { FlexBox } from '../../../shared/FlexBox';

export const CreateCardIssue: FC = (): JSX.Element => {
  return (
    <div>
      <IssueContainer flexDirection="column" justifyContent="center" padding="0 10px">
        <FlexBox justifyContent="space-between">
          <FlexBox>
            <TextContainer>Crete new Issue</TextContainer>
          </FlexBox>
          <Add fontSize="large" color="action" />
        </FlexBox>
      </IssueContainer>
    </div>
  );
};
