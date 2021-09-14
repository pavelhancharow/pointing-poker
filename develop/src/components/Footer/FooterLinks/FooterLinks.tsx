import { FC } from 'react';
import { FooterGitHubIcon, FooterLink, FooterNavDevelopers } from './style';

export const FooterLinks: FC = (): JSX.Element => {
  return (
    <FooterNavDevelopers>
      <FooterGitHubIcon />
      <FooterLink href="https://github.com/pavelhancharow" target="_blank">
        pavelhancharow
      </FooterLink>
      <FooterLink href="https://github.com/eugenemp" target="_blank">
        eugenemp
      </FooterLink>
      <FooterLink href="https://github.com/Nevold" target="_blank">
        Nevold
      </FooterLink>
    </FooterNavDevelopers>
  );
};
