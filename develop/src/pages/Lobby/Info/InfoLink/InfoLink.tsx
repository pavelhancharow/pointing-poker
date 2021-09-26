import { FC } from 'react';
import { Button } from '../../../../shared/style/Button';
import { FlexBox } from '../../../../shared/style/FlexBox';
import { Input } from '../../../../shared/style/Input';

export const InfoLink: FC = (): JSX.Element => {
  return (
    <FlexBox margin="0 0 30px 0">
      <Input forButton disabled defaultValue="http://pockerplanning.c" />
      <Button primary forInput>
        Copy
      </Button>
    </FlexBox>
  );
};
