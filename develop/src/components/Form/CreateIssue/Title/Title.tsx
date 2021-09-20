import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input } from '../../../../shared/style/Input';
import { Label } from '../../../../shared/style/Label';

type TitleType = {
  register: UseFormRegister<FormValuesType>;
};

export const Title: FC<TitleType> = ({ register }): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" margin="0 0 47px 0">
      <Label htmlFor="title">Title:</Label>
      <Input id="title" {...register('title')} />
    </FlexBox>
  );
};
