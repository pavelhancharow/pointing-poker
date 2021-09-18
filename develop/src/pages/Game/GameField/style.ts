import styled from 'styled-components';
import { FlexBox } from '../../../shared/FlexBox';

export const GameFieldBox = styled(FlexBox)`
  border-right: 1px solid rgba(0, 0, 0, 0.5);
`;

GameFieldBox.defaultProps = {
  flexDirection: 'column',
  width: '67%',
  padding: '40px 128px 31px 38px'
};
