import { FC } from 'react';
import { FlexBox } from '../../../shared/FlexBox';
import { BlockTitle, Description } from '../style';
import { Button } from '../../../shared/style/Button';
import { Input } from '../../../shared/style/Input';
import { Label } from '../../../shared/style/Label';

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
        <Input forButton type="text" />
        <Button primary forInput wide>
          Connect
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
