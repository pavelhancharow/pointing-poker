import { FC } from 'react';
import { Switcher } from '../../../../../components/Switcher';
import { FlexBox } from '../../../../../shared/style/FlexBox';
import { Label } from '../../../../../shared/style/Label';

export const ChangeCards: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <Label settingsForm htmlFor="changeCards">
        Changing card in round end:
      </Label>
      <Switcher />
    </FlexBox>
  );
};
