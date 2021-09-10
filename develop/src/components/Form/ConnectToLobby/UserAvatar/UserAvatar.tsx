import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { Button } from '../../../../shared/Button';
import { Input, InputBox } from '../../../../shared/Input';

type UserAvatarType = {
  register: UseFormRegister<FormValuesType>;
};

export const UserAvatar: FC<UserAvatarType> = ({ register }) => {
  return (
    <InputBox flexDirection="column" width="468px" marginLabel="0 0 9px 0">
      <span className="label">Image:</span>
      <InputBox margin="0 0 15px 0">
        <Input disabled placeholder="Choose file" />
        <Button borderRadius="0px 3px 3px 0px">
          Button
          <label className="label-file" htmlFor="userAvatar">
            <Input type="file" id="userAvatar" {...register('fileImage')} opacity="0" visibility="hidden" />
          </label>
        </Button>
      </InputBox>
      <div style={{ width: '87px', height: '87px', background: '#60DABF', borderRadius: '50%' }} />
    </InputBox>
  );
};
