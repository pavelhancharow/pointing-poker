import { FC } from 'react';
import { FooterLogoCourse, RSSYear } from './style';

export const FooterLogo: FC = (): JSX.Element => {
  return (
    <FooterLogoCourse href="https://rs.school/react/">
      <RSSYear>'21</RSSYear>
    </FooterLogoCourse>
  );
};
