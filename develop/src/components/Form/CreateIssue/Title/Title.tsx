import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input, Label } from '../../../../shared/Form';

type TitleType = {
  register: UseFormRegister<FormValuesType>;
};

export const Title: FC<TitleType> = ({ register }): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" margin="0 0 47px 0">
      <Label htmlFor="title">Title:</Label>
      <Input id="title" {...register('title')} height="47px" width="420px" />
    </FlexBox>
  );
};
