import { FC } from 'react';
import { FlexBox } from '../../../shared/FlexBox';
import { BlockTitle, Description } from '../style';
import { Button } from '../../../shared/Button';
import { Input } from '../../../shared/Form';

export const LinkConnect: FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column" width="inherit">
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
        <Input type="text" borderRightWidth="0" />
        <Button borderRadius="0px 3px 3px 0px" padding="7px 74px">
          Connect
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
