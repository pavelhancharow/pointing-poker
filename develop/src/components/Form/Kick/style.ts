import styled from 'styled-components';

type TextType = {
  fontSize?: string;
  lineHeight?: string;
};

export const Text = styled.span<TextType>`
  font-family: Ruda;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: center;

  span {
    color: #496a81;
  }
`;

Text.defaultProps = {
  fontSize: '24px',
  lineHeight: '30px'
};
