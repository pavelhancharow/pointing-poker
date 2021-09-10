import styled from 'styled-components';

type InputType = {
  width?: string;
  borderRight?: string;
  opacity?: string;
  visibility?: string;
};

export const Input = styled.input<InputType>`
  width: ${({ width }) => width};
  padding: 0 5px 0 15px;

  border: 1px solid #2b3a67;
  border-right: ${({ borderRight }) => borderRight};

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;

  opacity: ${({ opacity }) => opacity};
  visibility: ${({ visibility }) => visibility};

  &:disabled {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #eeeeee;
    border-right: 0;
  }

  &::placeholder {
    color: #000000;
  }
`;

Input.defaultProps = {
  width: 'inherit',
  borderRight: '0',
  opacity: '1',
  visibility: 'visible'
};

type InputBoxType = {
  flexDirection?: string;
  width?: string;
  margin?: string;
  marginLabel?: string;
  fontFamilyLabel?: string;
  fontWeightLabel?: string;
  lineHeightLabel?: string;
};

export const InputBox = styled.div<InputBoxType>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};

  .label {
    margin: ${({ marginLabel }) => marginLabel};
    font-family: ${({ fontFamilyLabel }) => fontFamilyLabel};
    font-weight: ${({ fontWeightLabel }) => fontWeightLabel};
    line-height: ${({ lineHeightLabel }) => lineHeightLabel};
  }

  .label-file {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: '100%';
    height: '100%';
    cursor: 'pointer';
    z-index: 1;
  }
`;

InputBox.defaultProps = {
  flexDirection: 'row',
  width: 'inherit',
  margin: '0',
  marginLabel: '0',
  fontFamilyLabel: 'Roboto',
  fontWeightLabel: '700',
  lineHeightLabel: 'inherit'
};
