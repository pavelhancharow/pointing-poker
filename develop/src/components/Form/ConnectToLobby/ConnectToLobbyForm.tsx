import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Observer } from './Observer';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { Job } from './Job';
import { UserAvatar } from './UserAvatar';
import { Button } from '../../../shared/Button';
import { FormTitle } from '../../../shared/Form';
import { FlexBox } from '../../../shared/FlexBox';

import { RootState } from '../../../store/types/todo';
import { setModalState } from '../../../store/action-creaters/action-creaters';

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

  const dispatch = useDispatch();
  const isModalState = useSelector((state: RootState) => state.modalReducer.modal);

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
          <Button onClick={() => setModalState(dispatch, isModalState)} type="submit">
            Confirm
          </Button>
          <Button onClick={() => setModalState(dispatch, isModalState)} background="#ffffff" color="#2b3a67">
            Cancel
          </Button>
        </FlexBox>
      </form>
    </>
  );
};
