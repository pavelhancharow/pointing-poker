import React from 'react';
import { UnauthorizedContainer, GameLogo, UnauthorizedBlock, UnauthorizedBlockTitle } from './style';
import ButtonComponent from '../../Button';
import InputComponent from '../../Input';

const Unauthorized: React.FC = () => {
  return (
    <UnauthorizedContainer>
      <GameLogo />
      <UnauthorizedBlock>
        <UnauthorizedBlockTitle marginBottom="66px">Start your planning:</UnauthorizedBlockTitle>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="description">Create session:</span>
          <ButtonComponent>Start new game</ButtonComponent>
        </div>
      </UnauthorizedBlock>
      <UnauthorizedBlock>
        <UnauthorizedBlockTitle marginBottom="31px" textAlign="center">
          OR:
        </UnauthorizedBlockTitle>
        <span className="description" style={{ marginBottom: '15px' }}>
          Connect to lobby by <span className="description-bold">URL</span>:
        </span>
        <div style={{ display: 'flex', width: 'inherit' }}>
          <InputComponent type="text" />
          <ButtonComponent borderRadius="0px 3px 3px 0px">Connect</ButtonComponent>
        </div>
      </UnauthorizedBlock>
    </UnauthorizedContainer>
  );
};

export default Unauthorized;
