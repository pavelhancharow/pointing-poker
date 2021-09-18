import { FC } from 'react';
import { Button } from '../../../../../shared/Button';
import { FlexBox } from '../../../../../shared/FlexBox';
import { MasterTitle } from '../../../../../shared/Title';
import { UserCard } from '../../../../../components/UserCard';

export const InfoMaster: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between">
      <FlexBox flexDirection="column">
        <MasterTitle>Scram master:</MasterTitle>
        <UserCard btn master />
      </FlexBox>
      <Button alignSelf="end" color="#2B3A67" background="#ffffff">
        Stop Game
      </Button>
    </FlexBox>
  );
};
