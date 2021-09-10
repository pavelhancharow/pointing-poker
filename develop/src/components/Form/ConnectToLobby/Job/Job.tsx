import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { Input, InputBox } from '../../../../shared/Input';

type JobType = {
  register: UseFormRegister<FormValuesType>;
};

export const Job: FC<JobType> = ({ register }) => {
  return (
    <InputBox flexDirection="column" width="468px" margin="0 0 9px 0" marginLabel="0 0 9px 0">
      <label className="label" htmlFor="job">
        Your job position (optional):
      </label>
      <Input id="job" {...register('job')} borderRight="1px solid #2b3a67" />
    </InputBox>
  );
};
