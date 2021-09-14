import { FC } from 'react';
import { Timer } from '../../../../../components/Timer';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Label } from '../../../../../shared/Form';

export const RoundTime: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="flex-start">
      <Label htmlFor="roundTime" fontFamily="Ruda">
        Round time:
      </Label>
      <Timer />
    </FlexBox>
  );
};
