import styled from 'styled-components';
import gameLogo from '../../assets/image/img/game-logo.png';
import { FlexBox } from '../../shared/FlexBox';

export const AuthorizeBox = styled(FlexBox)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const GameLogo = styled.div`
  width: 550.09px;
  height: 149px;
  margin: 0 auto 40px;
  background: center / cover no-repeat url(${gameLogo});
`;

type BlockTitleType = {
  marginBottom?: string;
  textAlign?: string;
};

export const BlockTitle = styled.span<BlockTitleType>`
  display: block;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #66999b;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  text-align: ${({ textAlign }) => textAlign};
`;

BlockTitle.defaultProps = {
  marginBottom: '0',
  textAlign: 'left'
};

type DescriptionType = {
  marginBottom?: string;
  fontWeight?: string;
  color?: string;
};

export const Description = styled.span<DescriptionType>`
  display: inline-block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  line-height: 28px;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

Description.defaultProps = {
  marginBottom: '0',
  fontWeight: 'inherit',
  color: 'inherit'
};
