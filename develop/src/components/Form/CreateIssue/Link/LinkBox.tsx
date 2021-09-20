import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input } from '../../../../shared/style/Input';
import { Label } from '../../../../shared/style/Label';

type LinkBoxType = {
  register: UseFormRegister<FormValuesType>;
};

export const LinkBox: FC<LinkBoxType> = ({ register }): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" margin="0 0 47px 0">
      <Label htmlFor="link">Link:</Label>
      <Input id="link" {...register('link')} />
    </FlexBox>
  );
};
