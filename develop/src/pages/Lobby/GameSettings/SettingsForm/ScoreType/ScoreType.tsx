import { FC } from 'react';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Input, Label } from '../../../../../shared/Form';

export const ScoreType: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <Label htmlFor="scoreType" fontFamily="Ruda">
        Score type:
      </Label>
      <Input type="text" id="scoreType" defaultValue="story point" fontFamily="Ruda" height="36px" />
    </FlexBox>
  );
};
