import { FC } from 'react';
import { Button } from '../../../shared/Button';
import { FlexBox } from '../../../shared/FlexBox';
import { Input } from '../../../shared/Form';
import { UserCard } from '../../../components/UserCard';
import { BlockBox, BlockTitle } from '../style';

export const UserMenu: FC = (): JSX.Element => (
  <BlockBox flexDirection="column" alignItems="flex-start" width="100%" gap="50px">
    <BlockTitle justifyContent="center" width="100%">
      Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)
    </BlockTitle>
    <UserCard />
    <FlexBox>
      <Input />
      <Button>Copy</Button>
    </FlexBox>
    <FlexBox justifyContent="space-between" width="100%">
      <Button>Start Game</Button>
      <Button color="#f2b3a67" background="#ffffff">
        Cancel Game
      </Button>
    </FlexBox>
  </BlockBox>
);
