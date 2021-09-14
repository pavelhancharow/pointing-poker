import { FC } from 'react';

import { FooterBlock } from './style';
import { FooterLinks } from './FooterLinks';
import { FooterLogo } from './FooterLogo';
import { Container } from '../../shared/Container';
import { FlexBox } from '../../shared/FlexBox';

export const Footer: FC = (): JSX.Element => {
  return (
    <FooterBlock>
      <Container>
        <FlexBox alignItems="center">
          <FooterLinks />
          <FooterLogo />
        </FlexBox>
      </Container>
    </FooterBlock>
  );
};
