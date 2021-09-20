import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Observer } from './Observer';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { Job } from './Job';
import { UserAvatar } from './UserAvatar';
import { Button } from '../../../shared/style/Button';
import { FormTitle } from '../../../shared/style/FormTitle';
import { FlexBox } from '../../../shared/FlexBox';

export type FormValuesType = {
  firstName: string;
  lastName: string;
  job: string;
  fileImage: string;
  gender: string;
};

export const ConnectToLobbyForm: FC = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormValuesType>();

  const onSubmit = (data: FormValuesType): FormValuesType => {
    return data;
  };

  return (
    <>
      <FormTitle marginBottom="30px">Connect to lobby</FormTitle>
      <Observer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexBox flexDirection="column" width="468px">
          <FirstName register={register} />
          <LastName register={register} />
          <Job register={register} />
          <UserAvatar register={register} />
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="space-between" margin="97px 0 0 0">
          <Button type="submit" primary>
            Confirm
          </Button>
          <Button>Cancel</Button>
        </FlexBox>
      </form>
    </>
  );
};
