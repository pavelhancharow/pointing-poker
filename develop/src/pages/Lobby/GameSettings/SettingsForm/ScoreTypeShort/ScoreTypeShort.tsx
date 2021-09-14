import { FC } from 'react';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Input, Label } from '../../../../../shared/Form';

export const ScoreTypeShort: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <Label htmlFor="scoreTypeShort" fontFamily="Ruda">
        Score type (Short):
      </Label>
      <Input type="text" id="scoreTypeShort" defaultValue="SP" fontFamily="Ruda" height="36px" />
    </FlexBox>
  );
};
