import { FC } from 'react';
import { FlexBox } from '../../../shared/FlexBox';
import { BlockTitle, Description } from '../style';
import { Input } from '../../../shared/Input';
import { Button } from '../../../shared/Button';

export const LinkConnect: FC = (): JSX.Element => {
  return (
    <FlexBox display="flex" flexDirection="column" width="515px">
      <BlockTitle marginBottom="31px" textAlign="center">
        OR:
      </BlockTitle>
      <Description marginBottom="15px">
        Connect to lobby by{' '}
        <Description fontWeight="700" color="#66999b">
          URL
        </Description>
        :
      </Description>
      <FlexBox width="inherit">
        <Input type="text" />
        <Button borderRadius="0px 3px 3px 0px" padding="7px 65px">
          Connect
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
