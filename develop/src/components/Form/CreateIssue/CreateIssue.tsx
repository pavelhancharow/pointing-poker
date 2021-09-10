import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FlexBox } from '../../../shared/FlexBox';
import { FormTitle, Input, Label } from '../../../shared/Form';

export const CreateIssueForm: FC = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <FormTitle marginBottom="75px">Create Issue</FormTitle>
      <form>
        <FlexBox flexDirection="column" width="569px">
          <FlexBox justifyContent="space-between" alignItems="center" margin="0 0 47px 0">
            <Label htmlFor="title">Title:</Label>
            <Input id="title" height="47px" width="420px" />
          </FlexBox>
          <FlexBox justifyContent="space-between" alignItems="center" margin="0 0 47px 0">
            <Label htmlFor="link">Link:</Label>
            <Input id="link" height="47px" width="420px" />
          </FlexBox>
          <FlexBox alignItems="center" margin="0 0 47px 0">
            <Label htmlFor="priority" margin="0 95px 0 0">
              Priority:
            </Label>
            <select id="priority">
              <option value="female">Low</option>
              <option value="male">Middle</option>
              <option value="other">Hight</option>
            </select>
          </FlexBox>
        </FlexBox>
      </form>
    </>
  );
};
