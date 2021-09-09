import { FC } from 'react';
import { Button } from '../../../shared/Button';
import { BlockTitle, Wrapper } from '../style';

export const NewGame: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <BlockTitle marginBottom="66px">Start your planning:</BlockTitle>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="description">Create session:</span>
        <Button>Start new game</Button>
      </div>
    </Wrapper>
  );
};
