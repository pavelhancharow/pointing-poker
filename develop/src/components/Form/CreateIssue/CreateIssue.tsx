import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FlexBox } from '../../../shared/FlexBox';
import { FormTitle } from '../../../shared/style/FormTitle';
import { Button } from '../../../shared/style/Button';
import { Title } from './Title';
import { LinkBox } from './Link';
import { SelectBox } from './Select';

export type FormValuesType = {
  title: string;
  link: string;
  job: string;
};

export const CreateIssueForm: FC = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormValuesType>();

  const onSubmit = (data: FormValuesType): FormValuesType => {
    return data;
  };

  return (
    <>
      <FormTitle marginBottom="75px">Create Issue</FormTitle>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <FlexBox flexDirection="column" width="569px" margin="0 auto">
          <Title register={register} />
          <LinkBox register={register} />
          <SelectBox register={register} />
        </FlexBox>
        <FlexBox display="flex" alignItems="center" justifyContent="space-between" margin="97px 0 0 0">
          <Button type="submit" primary>
            Yes
          </Button>
          <Button>No</Button>
        </FlexBox>
      </form>
    </>
  );
};
