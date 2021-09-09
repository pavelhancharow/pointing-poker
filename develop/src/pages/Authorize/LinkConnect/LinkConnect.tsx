import { FC } from 'react';
import { BlockTitle, Description, FlexBox, Wrapper } from '../style';
import { Button } from '../../../shared/Button';
import { Input } from '../../../shared/Input';

export const LinkConnect: FC = (): JSX.Element => {
  return (
    <Wrapper>
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
      <FlexBox>
        <Input type="text" />
        <Button borderRadius="0px 3px 3px 0px" padding="7px 65px">
          Connect
        </Button>
      </FlexBox>
    </Wrapper>
  );
};
