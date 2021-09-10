import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormTitle } from '../../../shared/Form';

export const CreateIssueForm: FC = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <FormTitle marginBottom="75px">Create Issue</FormTitle>
      <form />
    </>
  );
};
