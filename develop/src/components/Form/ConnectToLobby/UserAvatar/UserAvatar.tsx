import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValuesType } from '..';
import { Button } from '../../../../shared/style/Button';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input } from '../../../../shared/style/Input';
import { Label, LabelFile } from '../../../../shared/style/Label';
import { Avatar } from '../../../../shared/style/Avatar';

type UserAvatarType = {
  register: UseFormRegister<FormValuesType>;
};

export const UserAvatar: FC<UserAvatarType> = ({ register }): JSX.Element => {
  return (
    <FlexBox flexDirection="column">
      <Label>Image:</Label>
      <FlexBox margin="0 0 15px 0">
        <Input disabled placeholder="Choose file" />
        <Button primary forInput>
          Button
          <LabelFile className="file" htmlFor="userAvatar">
            <Input type="file" id="userAvatar" {...register('fileImage')} opacity="0" visibility="hidden" />
          </LabelFile>
        </Button>
      </FlexBox>
      <Avatar large>JD</Avatar>
    </FlexBox>
  );
};
