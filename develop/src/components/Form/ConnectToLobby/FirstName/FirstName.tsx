import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input, Label } from '../../../../shared/Form';

type FirstNameType = {
  register: UseFormRegister<FormValuesType>;
};

export const FirstName: FC<FirstNameType> = ({ register }): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 20px 0">
      <Label htmlFor="name" margin="0 0 9px 0" lineHeight="28px">
        Your first name:
      </Label>
      <Input id="name" {...register('firstName')} height="47px" width="inherit" />
    </FlexBox>
  );
};
