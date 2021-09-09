import { FC } from 'react';
import { Button } from '../../../shared/Button';
import { Input } from '../../../shared/Input';
import { BlockTitle, Wrapper } from '../style';

export const LinkConnect: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <BlockTitle marginBottom="31px" textAlign="center">
        OR:
      </BlockTitle>
      <span className="description" style={{ marginBottom: '15px' }}>
        Connect to lobby by <span className="description-bold">URL</span>:
      </span>
      <div style={{ display: 'flex', width: 'inherit' }}>
        <Input type="text" />
        <Button borderRadius="0px 3px 3px 0px" padding="7px 65px">
          Connect
        </Button>
      </div>
    </Wrapper>
  );
};
