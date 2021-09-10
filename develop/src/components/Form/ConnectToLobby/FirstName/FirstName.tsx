import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { Input, InputBox } from '../../../../shared/Input';

type FirstNameType = {
  register: UseFormRegister<FormValuesType>;
};

export const FirstName: FC<FirstNameType> = ({ register }): JSX.Element => {
  return (
    <InputBox flexDirection="column" width="468px" margin="0 0 20px 0" marginLabel="0 0 9px 0" lineHeightLabel="28px">
      <label className="label" htmlFor="name">
        Your first name:
      </label>
      <Input id="name" {...register('firstName')} borderRight="1px solid #2b3a67" />
      <div className="verification" style={{ display: 'none' }}>
        asd
      </div>
    </InputBox>
  );
};

export default FirstName;
