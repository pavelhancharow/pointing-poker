import React from 'react';
import { Container } from '@material-ui/core';
import { HeaderBlock, Logo } from './style';

const Header: React.FC = () => {
  return (
    <HeaderBlock>
      <Container>
        <Logo />
      </Container>
    </HeaderBlock>
  );
};

export default Header;
