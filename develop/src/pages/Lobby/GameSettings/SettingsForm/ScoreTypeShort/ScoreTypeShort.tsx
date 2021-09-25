import { FC } from 'react';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Input } from '../../../../../shared/style/Input';
import { Label } from '../../../../../shared/style/Label';

export const ScoreTypeShort: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <Label settingsForm htmlFor="scoreTypeShort">
        Score type (Short):
      </Label>
      <Input id="scoreTypeShort" defaultValue="SP" small />
    </FlexBox>
  );
};
