import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { Input, InputBox } from '../../../../shared/Input';

type LastNameType = {
  register: UseFormRegister<FormValuesType>;
};

export const LastName: FC<LastNameType> = ({ register }) => {
  return (
    <InputBox flexDirection="column" width="468px" margin="0 0 20px 0" marginLabel="0 0 9px 0">
      <label className="label" htmlFor="last">
        Your last name (optional):
      </label>
      <Input id="last" {...register('lastName')} borderRight="1px solid #2b3a67" />
    </InputBox>
  );
};
