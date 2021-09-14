import styled from 'styled-components';
import git from '../../../assets/image/svg/github.svg';
import { FlexBox } from '../../../shared/FlexBox';

export const FooterNavDevelopers = styled(FlexBox)`
  color: #b6bfc7;
`;

FooterNavDevelopers.defaultProps = {
  justifyContent: 'space-between',
  alignItems: 'center'
};

type FooterGitHubIconType = {
  width?: string;
  height?: string;
  marginRight?: string;
};

export const FooterGitHubIcon = styled.span`
  width: ${({ width }: FooterGitHubIconType) => width};
  height: ${({ height }: FooterGitHubIconType) => height};
  margin-right: ${({ marginRight }: FooterGitHubIconType) => marginRight};
  background-image: url(${git});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

FooterGitHubIcon.defaultProps = {
  width: '45px',
  height: '45px',
  marginRight: '20px'
};

export const FooterLink = styled.a`
  margin-right: 10px;
`;
