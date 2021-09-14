import { FC } from 'react';
import { Switcher } from '../../../../../components/Switcher';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Label } from '../../../../../shared/Form';

export const IsTimer: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <Label htmlFor="isTimer" fontFamily="Ruda">
        Is timer needed:
      </Label>
      <Switcher />
    </FlexBox>
  );
};
