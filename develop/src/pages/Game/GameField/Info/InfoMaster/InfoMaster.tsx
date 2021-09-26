import { FC } from 'react';
import { Button } from '../../../../../shared/style/Button';
import { FlexBox } from '../../../../../shared/FlexBox';
import { MasterTitle } from '../../../../../shared/Title';
import { UserCard } from '../../../../../shared/UserCard';

export const InfoMaster: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="flex-end">
      <FlexBox flexDirection="column">
        <MasterTitle>Scram master:</MasterTitle>
        <UserCard btn master />
      </FlexBox>
      <Button>Stop Game</Button>
    </FlexBox>
  );
};
