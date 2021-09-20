import { FC } from 'react';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Input } from '../../../../../shared/style/Input';
import { Label } from '../../../../../shared/style/Label';

export const ScoreType: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <Label htmlFor="scoreType" fontFamily="Ruda">
        Score type:
      </Label>
      <Input id="scoreType" defaultValue="story point" small />
    </FlexBox>
  );
};
