import { FC } from 'react';
import { Switcher } from '../../../../../components/Switcher';
import { FlexBox } from '../../../../../shared/style/FlexBox';
import { Label } from '../../../../../shared/style/Label';

export const AdminAsPlayer: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <Label settingsForm htmlFor="adminAsPlayer">
        Scram master as player:
      </Label>
      <Switcher />
    </FlexBox>
  );
};
