import styled from 'styled-components';
import {
  Create as Pen,
  Add,
  DeleteOutline as Delete,
  Close,
  Block,
  FreeBreakfast as Pause,
  ControlPoint as Circle
} from '@material-ui/icons';
import { FlexBox } from './FlexBox';

export { Pen, Add, Delete, Close, Block, Pause, Circle };

type IconsBoxType = {
  fontSize?: string;
  color?: string;
};

export const IconsBox = styled(FlexBox)`
  .svg {
    font-size: ${({ fontSize }: IconsBoxType) => fontSize};
    color: ${({ color }: IconsBoxType) => color};
    cursor: pointer;
  }

  .red {
    color: #ff0000;
  }
`;

IconsBox.defaultProps = {
  justifyContent: 'space-between',
  fontSize: '32px',
  color: '#636363'
};
