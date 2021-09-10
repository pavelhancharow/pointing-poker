import styled from 'styled-components';
import git from '../../assets/image/svg/github.svg';
import course from '../../assets/image/svg/rss.svg';
import { FlexBox } from '../../shared/FlexBox';

export const FooterBlock = styled.footer`
  padding: 12px 0;
  background-color: #2b3a67;
`;

export const FooterNavDevelopers = styled(FlexBox)`
  color: #b6bfc7;
`;

export const FooterGitHubIcon = styled.span`
  display: block;
  width: 45px;
  height: 45px;
  margin-right: 20px;
  background-image: url(${git});
  background-size: 45px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FooterLink = styled.a`
  margin-right: 10px;
`;

export const FooterLogoCourse = styled.a`
  display: block;
  position: relative;
  width: 86px;
  height: 32px;
  margin-left: auto;
  background-image: url(${course});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
  padding-right: 111px;
`;

export const RSSYear = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 21px;
  letter-spacing: -2px;
  color: #cbd5de;
  line-height: 0.9;
  font-weight: 700;
`;
