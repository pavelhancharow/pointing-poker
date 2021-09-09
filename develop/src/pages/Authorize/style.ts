import styled from 'styled-components';
import gameLogo from '../../assets/image/img/game-logo.png';

export const GameLogo = styled.div`
  width: 550.09px;
  height: 149px;
  margin: 0 auto 40px;
  background-image: url(${gameLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 130px 26px 232px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 515px;
  margin-bottom: 6px;
`;

type BlockTitleType = {
  marginBottom?: string;
  textAlign?: string;
};

export const BlockTitle = styled.span<BlockTitleType>`
  display: inline-block;
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

type FlexBoxType = {
  alignItems?: string;
  justifyContent?: string;
};

export const FlexBox = styled.span<FlexBoxType>`
  display: flex;
  width: inherit;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

FlexBox.defaultProps = {
  alignItems: 'normal',
  justifyContent: 'start'
};
