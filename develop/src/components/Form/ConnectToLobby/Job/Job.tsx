import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/style/FlexBox';
import { Input } from '../../../../shared/style/Input';
import { Label } from '../../../../shared/style/Label';

type JobType = {
  register: UseFormRegister<FormValuesType>;
};

export const Job: FC<JobType> = ({ register }): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 9px 0">
      <Label htmlFor="job">Your job position (optional):</Label>
      <Input id="job" {...register('job')} />
    </FlexBox>
  );
};
