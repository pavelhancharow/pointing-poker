import { FC } from 'react';
import { Container } from '../../shared/style/Container';
import { HeaderBlock, Logo } from './style';

export const Header: FC = (): JSX.Element => {
  return (
    <HeaderBlock>
      <Container>
        <Logo />
      </Container>
    </HeaderBlock>
  );
};
