import { FC } from 'react';
import { Container } from '@material-ui/core';

import { FooterBlock, FooterWrapper } from './style';
import { FooterLinks } from './FooterLinks';
import { FooterLogo } from './FooterLogo';

export const Footer: FC = (): JSX.Element => {
  return (
    <FooterBlock>
      <Container>
        <FooterWrapper>
          <FooterLinks />
          <FooterLogo />
        </FooterWrapper>
      </Container>
    </FooterBlock>
  );
};
