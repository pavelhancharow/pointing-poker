import styled from 'styled-components';

type FormTitleType = {
  marginBottom?: string;
};

export const FormTitle = styled.h3<FormTitleType>`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
`;

FormTitle.defaultProps = {
  marginBottom: '0'
};

type InputType = {
  width?: string;
  height?: string;
  padding?: string;
  border?: string;
  borderRightWidth?: string;
  borderRadius?: string;
  opacity?: string;
  visibility?: string;
};

export const Input = styled.input<InputType>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};

  border: ${({ border }) => border};
  border-right-width: ${({ borderRightWidth }) => borderRightWidth};
  border-radius: ${({ borderRadius }) => borderRadius};

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: ${({ opacity }) => opacity};
  visibility: ${({ visibility }) => visibility};

  &:disabled {
    font-weight: 300;
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
  width: 'auto',
  height: 'auto',
  padding: '0 5px 0 15px',
  border: '1px solid #2b3a67',
  borderRightWidth: '1px',
  borderRadius: '0px 0px 0px 10px',
  opacity: '1',
  visibility: 'visible'
};

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
