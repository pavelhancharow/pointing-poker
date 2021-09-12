import styled from 'styled-components';
import { FlexBox } from './FlexBox';

type CardBoxType = {
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
};

export const CardBox = styled(FlexBox)`
  font-weight: ${({ fontWeight }: CardBoxType) => fontWeight};
  font-size: ${({ fontSize }: CardBoxType) => fontSize};
  line-height: ${({ lineHeight }: CardBoxType) => lineHeight};

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

CardBox.defaultProps = {
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '500px',
  height: '120px',
  padding: '18px 21px 19px 22px',
  fontWeight: '700',
  fontSize: '64px',
  lineHeight: '81px'
};

type CardTextType = {
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
};

export const CardText = styled(FlexBox)`
  .title {
    font-weight: ${({ fontWeight }: CardTextType) => fontWeight};
    font-size: ${({ fontSize }: CardTextType) => fontSize};
    line-height: ${({ lineHeight }: CardTextType) => lineHeight};
  }

  .description {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
  }
`;

CardText.defaultProps = {
  flexDirection: 'column',
  fontWeight: '300',
  fontSize: '48px',
  lineHeight: '56px'
};
