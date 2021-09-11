import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { Button } from '../../../../shared/Button';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input, Label, LabelFile } from '../../../../shared/Form';
import { Avatar } from '../../../../shared/Avatar';

type UserAvatarType = {
  register: UseFormRegister<FormValuesType>;
};

export const UserAvatar: FC<UserAvatarType> = ({ register }): JSX.Element => {
  return (
    <FlexBox flexDirection="column">
      <Label margin="0 0 9px 0">Image:</Label>
      <FlexBox margin="0 0 15px 0">
        <Input disabled placeholder="Choose file" width="100%" />
        <Button borderRadius="0px 3px 3px 0px" padding="7px 57px">
          Button
          <LabelFile className="file" htmlFor="userAvatar">
            <Input type="file" id="userAvatar" {...register('fileImage')} opacity="0" visibility="hidden" />
          </LabelFile>
        </Button>
      </FlexBox>
      <Avatar>JD</Avatar>
    </FlexBox>
  );
};
