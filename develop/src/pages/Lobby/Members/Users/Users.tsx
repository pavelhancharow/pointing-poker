import { FC } from 'react';
import { UserCard } from '../../../../components/UserCard';
import { ItemsBox } from '../../style';

export const Users: FC = (): JSX.Element => {
  return (
    <ItemsBox justifyContent="center">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </ItemsBox>
  );
};
