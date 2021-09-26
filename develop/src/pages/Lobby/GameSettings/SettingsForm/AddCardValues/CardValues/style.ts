import styled from 'styled-components';
import { FlexBox } from '../../../../../../shared/FlexBox';

type GameCardBoxType = {
  content?: string;
  color?: string;
};

export const GameCardBox = styled(FlexBox)`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 162px;
  font-weight: 700;
  font-size: 70px;
  line-height: 85px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &::before {
    content: '${({ content }) => content}';
    position: absolute;
    top: 4px;
    left: 7px;
    font-size: 12px;
    line-height: 14px;
  }

  &::after {
    content: '${({ content }) => content}';
    position: absolute;
    bottom: 4px;
    right: 7px;
    font-size: 12px;
    line-height: 14px;
    transform: rotate(180deg);
  }

  .main {
    font-size: 50px;
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
  color: 'inherit'
};
