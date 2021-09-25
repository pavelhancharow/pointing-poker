import { FC } from 'react';
import { Timer } from '../../../../../components/Timer';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Label } from '../../../../../shared/style/Label';

export const RoundTime: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="flex-start">
      <Label settingsForm htmlFor="roundTime">
        Round time:
      </Label>
      <Timer />
    </FlexBox>
  );
};
