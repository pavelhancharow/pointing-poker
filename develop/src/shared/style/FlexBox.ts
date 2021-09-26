import styled from 'styled-components';

type FlexBoxType = {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
};

export const FlexBox = styled.div<FlexBoxType>`
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

FlexBox.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'stretch',
  width: 'auto',
  height: 'auto',
  margin: '0',
  padding: '0'
};
