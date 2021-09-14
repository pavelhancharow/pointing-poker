import styled from 'styled-components';

type LinkTitleType = {
  fontSize?: string;
  lineHeight?: string;
  marginBottom?: string;
};

export const LinkTitle = styled.span`
  font-style: italic;
  font-size: ${({ fontSize }: LinkTitleType) => fontSize};
  line-height: ${({ lineHeight }: LinkTitleType) => lineHeight};
  margin-bottom: ${({ marginBottom }: LinkTitleType) => marginBottom};
`;

LinkTitle.defaultProps = {
  fontSize: '24px',
  lineHeight: '28px',
  marginBottom: '9px'
};
