import styled from 'styled-components';

type LabelType = {
  margin?: string;
  fontFamily?: string;
  fontWeight?: string;
  lineHeight?: string;
};

export const Label = styled.label<LabelType>`
  margin: ${({ margin }) => margin};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
`;

Label.defaultProps = {
  margin: '0',
  fontFamily: 'Roboto',
  fontWeight: '700',
  lineHeight: 'inherit'
};

export const LabelFile = styled.label<LabelType>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 1;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  padding-left: 6px;
  font-size: 24px;
  line-height: 28px;
`;
