import { Container, Link } from '@material-ui/core';
import React from 'react';

import { FooterBlock, FooterNavDevelopers, FooterWrapper, FooterGitHubIcon, FooterLogoCourse, RSSYear } from './style';

const Footer: React.FC = () => {
  const developers: string[] = [
    'https://github.com/pavelhancharow',
    'https://github.com/eugenemp',
    'https://github.com/Nevold'
  ];

  const getDeveloperLink = () => {
    return developers.map((dev) => {
      const name = dev.substr(dev.lastIndexOf('/') + 1);
      return (
        <Link key={name} href={dev} target="_blank" color="inherit" style={{ marginRight: '10px' }}>
          {name}
        </Link>
      );
    });
  };

  return (
    <FooterBlock>
      <Container>
        <FooterWrapper>
          <FooterNavDevelopers>
            <FooterGitHubIcon />
            {getDeveloperLink()}
          </FooterNavDevelopers>
          <FooterLogoCourse href="https://rs.school/react/">
            <RSSYear>'21</RSSYear>
          </FooterLogoCourse>
        </FooterWrapper>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
