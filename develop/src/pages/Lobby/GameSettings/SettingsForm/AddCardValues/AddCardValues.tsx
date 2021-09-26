import { FC } from 'react';
import { FlexBox } from '../../../../../shared/style/FlexBox';
import { Label } from '../../../../../shared/style/Label';
import { CardValues } from './CardValues';

export const AddCardValues: FC = (): JSX.Element => (
  <FlexBox flexDirection="column">
    <Label addCard htmlFor="addCardValues">
      Add card values:
    </Label>
    <CardValues />
  </FlexBox>
);
