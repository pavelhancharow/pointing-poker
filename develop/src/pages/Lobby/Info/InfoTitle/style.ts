import styled from 'styled-components';
import { FlexBox } from '../../../../shared/style/FlexBox';

type TitleBoxType = {
  fontSize?: string;
  color?: string;
};

export const TitleBox = styled(FlexBox)`
  .edit {
    font-size: ${({ fontSize }: TitleBoxType) => fontSize};
    color: ${({ color }: TitleBoxType) => color};
    cursor: pointer;
  }
`;

TitleBox.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 0 43px 0',
  fontSize: '25px',
  color: '#636363'
};
