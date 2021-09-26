import { FC } from 'react';
import { UserCard } from '../../../../shared/UserCard';
import { FlexBox } from '../../../../shared/style/FlexBox';
import { MasterTitle } from '../../../../shared/style/Title';

export const InfoMaster: FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 16px 0">
      <MasterTitle>Scram master:</MasterTitle>
      <UserCard master btn />
    </FlexBox>
  );
};
