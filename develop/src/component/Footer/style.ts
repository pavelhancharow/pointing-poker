import styled from 'styled-components';
import git from '../../assets/image/svg/github.svg';
import course from '../../assets/image/svg/rss.svg';

const FooterBlock = styled.footer`
  width: 100%;
  height: 70px;
  padding: 10px 0;
  background-color: #2b3a67;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FooterNavDevelopers = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #b6bfc7;
`;

const FooterGitHubIcon = styled.span`
  display: block;
  width: 45px;
  height: 45px;
  margin-right: 20px;
  background-image: url(${git});
  background-size: 45px;
  background-repeat: no-repeat;
  background-position: center;
`;

const FooterLogoCourse = styled.a`
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

const RSSYear = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 21px;
  letter-spacing: -2px;
  color: #cbd5de;
  line-height: 0.9;
  font-weight: 700;
`;

export { FooterBlock, FooterWrapper, FooterNavDevelopers, FooterGitHubIcon, FooterLogoCourse, RSSYear };
