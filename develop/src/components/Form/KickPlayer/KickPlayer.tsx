import { FC } from 'react';
import { FlexBox } from '../../../shared/FlexBox';
import { FormTitle } from '../../../shared/style/FormTitle';
import { Button } from '../../../shared/style/Button';
import { Text } from './style';

export const KickPlayer: FC = (): JSX.Element => {
  return (
    <>
      <FormTitle marginBottom="75px">Kick Player</FormTitle>
      <Text>
        Are you really want to remove player <span>David Blane</span> from game session?
      </Text>
      <FlexBox display="flex" alignItems="center" justifyContent="space-between" width="100%" margin="97px 0 0 0">
        <Button primary>Yes</Button>
        <Button>No</Button>
      </FlexBox>
    </>
  );
};
