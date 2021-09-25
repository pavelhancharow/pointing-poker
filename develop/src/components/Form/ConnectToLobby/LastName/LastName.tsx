import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input } from '../../../../shared/style/Input';
import { Label } from '../../../../shared/style/Label';

type LastNameType = {
  register: UseFormRegister<FormValuesType>;
};

export const LastName: FC<LastNameType> = ({ register }): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 20px 0">
      <Label htmlFor="last">Your last name (optional):</Label>
      <Input id="last" {...register('lastName')} />
    </FlexBox>
  );
};
