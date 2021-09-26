import styled from 'styled-components';

type TitleType = {
  marginBottom?: string;
  fontSize?: string;
  lineHeight?: string;
};

export const Title = styled.h3<TitleType>`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-family: Ruda;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: center;
`;

Title.defaultProps = {
  marginBottom: '43px',
  fontSize: '24px',
  lineHeight: '30px'
};

type TitleInput = {
  maxWidth?: string;
  height?: string;
  marginRight?: string;
};

export const TitleInput = styled.input`
  width: 100%;
  height: ${({ height }: TitleInput) => height};
  max-width: ${({ maxWidth }: TitleInput) => maxWidth};
  margin-right: ${({ marginRight }: TitleInput) => marginRight};
  padding: 0 10px;
  font-family: Ruda;
  text-align: center;
  background: #ffffff;
  border: none;
  border-radius: 6px;

  &:focus {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.18);
  }

  &:disabled {
    color: inherit;
  }
`;

TitleInput.defaultProps = {
  maxWidth: '67%',
  height: '35px',
  marginRight: '15px'
};

type MasterTitleType = {
  fontSize?: string;
  lineHeight?: string;
};

export const MasterTitle = styled.span`
  display: inline-block;
  margin-bottom: 5px;
  font-family: Ruda;
  font-size: ${({ fontSize }: MasterTitleType) => fontSize};
  line-height: ${({ lineHeight }: MasterTitleType) => lineHeight};
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

MasterTitle.defaultProps = {
  fontSize: '12px',
  lineHeight: '15px'
};
