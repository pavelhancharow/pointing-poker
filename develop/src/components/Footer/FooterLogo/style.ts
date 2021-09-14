import styled from 'styled-components';
import course from '../../../assets/image/svg/rss.svg';

export const FooterLogoCourse = styled.a`
  display: block;
  position: relative;
  width: 86px;
  height: 32px;
  margin-left: auto;
  padding-right: 111px;
  background-image: url(${course});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
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
