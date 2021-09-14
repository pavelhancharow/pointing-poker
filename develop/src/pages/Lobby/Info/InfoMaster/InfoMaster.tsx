import { FC } from 'react';
import { UserCard } from '../../../../components/UserCard';
import { FlexBox } from '../../../../shared/FlexBox';
import { MasterTitle } from '../../../../shared/Title';

export const InfoMaster: FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 16px 0">
      <MasterTitle>Scram master:</MasterTitle>
      <UserCard />
    </FlexBox>
  );
};
