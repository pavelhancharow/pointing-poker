import { FC } from 'react';
import { FlexBox } from '../../../shared/FlexBox';
import { UserCard } from '../../../components/UserCard';
import { BlockBox, BlockTitle } from '../style';

export const Members: FC = (): JSX.Element => (
  <BlockBox flexDirection="column" width="100%" gap="50px">
    <BlockTitle justifyContent="center" width="100%">
      Members:
    </BlockTitle>
    <BlockBox flexWrap="wrap" gap="20px" width="100%">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </BlockBox>
  </BlockBox>
);
