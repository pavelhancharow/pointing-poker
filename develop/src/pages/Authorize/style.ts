import styled from 'styled-components';
import gameLogo from '../../assets/image/img/game-logo.png';
import { FlexBox } from '../../shared/FlexBox';

export const AuthorizeBox = styled(FlexBox)`
  flex-direction: column;
  padding: 130px 26px 232px;
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
  fontSize?: string;
  lineHeight?: string;
  textAlign?: string;
};

export const BlockTitle = styled.span<BlockTitleType>`
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  color: #66999b;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  text-align: ${({ textAlign }) => textAlign};
`;

BlockTitle.defaultProps = {
  marginBottom: '0',
  fontSize: '48px',
  lineHeight: '56px',
  textAlign: 'left'
};

type DescriptionType = {
  marginBottom?: string;
  fontWeight?: string;
  color?: string;
};

export const Description = styled.span<DescriptionType>`
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
