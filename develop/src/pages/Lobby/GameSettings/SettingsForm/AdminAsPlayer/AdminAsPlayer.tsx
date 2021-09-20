import { FC } from 'react';
import { Switcher } from '../../../../../components/Switcher';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Label } from '../../../../../shared/style/Label';

export const AdminAsPlayer: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <Label htmlFor="adminAsPlayer" fontFamily="Ruda">
        Scram master as player:
      </Label>
      <Switcher />
    </FlexBox>
  );
};
