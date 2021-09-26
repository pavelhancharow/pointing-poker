import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/style/FlexBox';
import { Input } from '../../../../shared/style/Input';
import { Label } from '../../../../shared/style/Label';

type FirstNameType = {
  register: UseFormRegister<FormValuesType>;
};

export const FirstName: FC<FirstNameType> = ({ register }): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 20px 0">
      <Label htmlFor="name">Your first name:</Label>
      <Input id="name" {...register('firstName')} />
    </FlexBox>
  );
};
