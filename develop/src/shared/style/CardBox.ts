import styled from 'styled-components';
import { FlexBox } from './FlexBox';

type CardBoxProps = {
  btn?: boolean;
  type: 'user' | 'user-small' | 'issue' | 'score';
};

export const CardBox = styled(FlexBox)`
  justify-content: ${({ btn }: CardBoxProps) => (btn ? 'flex-start' : 'space-between')};
  align-items: center;
  padding: 11px 13px;
  font-family: inherit;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  ${({ type }) =>
    type === 'user' &&
    `
    width: 300px;
  `}

  ${({ type }) =>
    type === 'user-small' &&
    `
    width: 200px;
    padding: 6px 9px;
    font-size: 20px;
    line-height: 23px;
  `}

  ${({ type }) =>
    type === 'issue' &&
    `
    width: 250px;
    height: 63px;
    margin: 0 0 22px 0;
    font-family: inherit;
  `}

  ${({ type }) =>
    type === 'score' &&
    `
    width: 200px;
    height: 46px;
    font-family: 'Ruda';
    font-size: 26px;
    line-height: 32px;
  `}
`;

type CardTextProps = {
  type?: 'user' | 'user-small' | 'issue' | 'score';
  btn?: boolean;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
};

export const CardText = styled(FlexBox)`
  flex-direction: column;
  position: relative;
  margin-left: ${({ btn }: CardTextProps) => (btn ? '15px' : '0px')};

  .master {
    position: absolute;
    top: -8px;
    left: 3px;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
  }

  .title {
    font-weight: 300;
    font-size: 30px;
    line-height: 35px;
  }

  .description {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
  }

  ${({ type }) => type === 'user' && ``}

  ${({ type }) =>
    type === 'user-small' &&
    `
    .master {
      font-size: 8px;
      line-height: 10px;
    }

    .title {
      font-size: 20px;
      line-height: 24px;
    }

    .description {
      font-size: 8px;
      line-height: 10px;
    }
  `}

  ${({ type }) =>
    type === 'issue' &&
    `
    .title {
      font-size: 24px;
      line-height: 25px;
    }

    .description {
      font-size: 8px;
      line-height: 10px;
    }
  `}
`;
