import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input, Label } from '../../../../shared/Form';

type JobType = {
  register: UseFormRegister<FormValuesType>;
};

export const Job: FC<JobType> = ({ register }): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 9px 0">
      <Label htmlFor="job" margin="0 0 9px 0">
        Your job position (optional):
      </Label>
      <Input id="job" {...register('job')} height="47px" width="inherit" />
    </FlexBox>
  );
};
