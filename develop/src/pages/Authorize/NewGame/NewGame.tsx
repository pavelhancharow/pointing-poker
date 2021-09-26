import { FC } from 'react';
import { BlockTitle, Description } from '../style';
import { Button } from '../../../shared/style/Button';
import { FlexBox } from '../../../shared/style/FlexBox';

export const NewGame: FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column" width="inherit" margin="0 0 6px 0">
      <BlockTitle marginBottom="66px">Start your planning:</BlockTitle>
      <FlexBox alignItems="center" justifyContent="space-between">
        <Description>Create session:</Description>
        <Button primary wide>
          Start new game
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
