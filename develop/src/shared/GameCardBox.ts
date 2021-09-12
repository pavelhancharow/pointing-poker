import styled from 'styled-components';
import { FlexBox } from './FlexBox';

type GameCardBoxType = {
  content?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
};

export const GameCardBox = styled(FlexBox)`
  position: relative;

  font-weight: 700;
  font-size: ${({ fontSize }: GameCardBoxType) => fontSize};
  line-height: ${({ lineHeight }: GameCardBoxType) => lineHeight};

  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &::before {
    content: '${({ content }) => content}';
    position: absolute;
    top: ${({ top }: GameCardBoxType) => top};
    left: ${({ left }: GameCardBoxType) => left};
    font-size: 12px;
    line-height: 14px;
  }

  &::after {
    content: '${({ content }) => content}';
    position: absolute;
    bottom: ${({ bottom }: GameCardBoxType) => bottom};
    right: ${({ right }: GameCardBoxType) => right};
    font-size: 12px;
    line-height: 14px;
    transform: rotate(180deg);
  }

  .main {
    font-size: ${({ fontSize }: GameCardBoxType) => fontSize};
    color: ${({ color }: GameCardBoxType) => color};
  }

  .edit {
    position: absolute;
    top: 3px;
    right: 7px;
    font-size: 15px;
    color: #636363;
  }
`;

GameCardBox.defaultProps = {
  content: '',
  top: '4px',
  right: '7px',
  bottom: '4px',
  left: '7px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '162px',
  fontSize: '50px',
  lineHeight: '85px',
  color: 'inherit'
};
