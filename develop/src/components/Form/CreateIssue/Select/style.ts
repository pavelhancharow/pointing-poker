import styled from 'styled-components';
import { FlexBox } from '../../../../shared/FlexBox';

export const SelectWrap = styled(FlexBox)`
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

export const IconWrap = styled(FlexBox)`
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
  z-index: -1;
`;
