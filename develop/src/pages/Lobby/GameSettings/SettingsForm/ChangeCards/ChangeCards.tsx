import { FC } from 'react';
import { Switcher } from '../../../../../components/Switcher';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Label } from '../../../../../shared/style/Label';

export const ChangeCards: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <Label htmlFor="changeCards" fontFamily="Ruda">
        Changing card in round end:
      </Label>
      <Switcher />
    </FlexBox>
  );
};
