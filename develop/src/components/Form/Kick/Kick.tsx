import { FC } from 'react';
import { FlexBox } from '../../../shared/FlexBox';
import { FormTitle } from '../../../shared/Form';
import { Button } from '../../../shared/Button';
import { Text } from './style';

export const Kick: FC = (): JSX.Element => {
  return (
    <>
      <FormTitle marginBottom="75px">Kick Player</FormTitle>
      <Text>
        <span>Dayana Ross</span> want to kick member <span>David Blane</span>. Do you agree with it?
      </Text>
      <FlexBox display="flex" alignItems="center" justifyContent="space-between" width="100%" margin="97px 0 0 0">
        <Button padding="7px 74px">Yes</Button>
        <Button background="#ffffff" color="#2b3a67" padding="7px 74px">
          No
        </Button>
      </FlexBox>
    </>
  );
};
