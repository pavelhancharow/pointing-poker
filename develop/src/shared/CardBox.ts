import styled from 'styled-components';
import { FlexBox } from './FlexBox';

type CardBoxType = {
  btn?: boolean;
  justifyContent?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
};

export const CardBox = styled(FlexBox)`
  justify-content: ${({ btn, justifyContent }: CardBoxType) => (btn ? 'flex-start' : justifyContent)};
  font-family: ${({ fontFamily }: CardBoxType) => fontFamily};
  font-weight: ${({ fontWeight }: CardBoxType) => fontWeight};
  font-size: ${({ fontSize }: CardBoxType) => fontSize};
  line-height: ${({ lineHeight }: CardBoxType) => lineHeight};

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

CardBox.defaultProps = {
  btn: false,
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '300px',
  padding: '11px 13px',
  fontFamily: 'inherit',
  fontWeight: '700',
  fontSize: '26px',
  lineHeight: '32px'
};

type CardTextType = {
  btn?: boolean;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  fontSizeDes?: string;
  lineHeightDes?: string;
};

export const CardText = styled(FlexBox)`
  position: relative;
  margin-left: ${({ btn }: CardTextType) => (btn ? '15px' : '0px')};

  .master {
    position: absolute;
    top: -8px;
    left: 3px;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
  }

  .title {
    font-weight: ${({ fontWeight }: CardTextType) => fontWeight};
    font-size: ${({ fontSize }: CardTextType) => fontSize};
    line-height: ${({ lineHeight }: CardTextType) => lineHeight};
  }

  .description {
    font-weight: 300;
    font-size: ${({ fontSizeDes }: CardTextType) => fontSizeDes};
    line-height: ${({ lineHeightDes }: CardTextType) => lineHeightDes};
  }
`;

CardText.defaultProps = {
  btn: false,
  flexDirection: 'column',
  fontWeight: '300',
  fontSize: '30px',
  lineHeight: '35px',
  fontSizeDes: '10px',
  lineHeightDes: '12px'
};
