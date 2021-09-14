import { FC } from 'react';
import { Button } from '../../../../shared/Button';
import { FlexBox } from '../../../../shared/FlexBox';
import { Input } from '../../../../shared/Form';

export const InfoLink: FC = (): JSX.Element => {
  return (
    <FlexBox margin="0 0 30px 0">
      <Input type="text" disabled defaultValue="http://pockerplanning.c" borderRightWidth="0" />
      <Button borderRadius="0px 3px 3px 0px" padding="7px 66px">
        Copy
      </Button>
    </FlexBox>
  );
};
