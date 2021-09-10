import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input, Label } from '../../../../shared/Form';

type LastNameType = {
  register: UseFormRegister<FormValuesType>;
};

export const LastName: FC<LastNameType> = ({ register }): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 20px 0">
      <Label htmlFor="last" margin="0 0 9px 0">
        Your last name (optional):
      </Label>
      <Input id="last" {...register('lastName')} height="47px" width="inherit" />
    </FlexBox>
  );
};
