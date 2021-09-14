import { FC } from 'react';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Label } from '../../../../../shared/Form';
import { CardValues } from './CardValues';

export const AddCardValues: FC = (): JSX.Element => (
  <FlexBox flexDirection="column">
    <Label htmlFor="addCardValues" fontFamily="Ruda" margin="0 0 30px 0">
      Add card values:
    </Label>
    <CardValues />
  </FlexBox>
);
