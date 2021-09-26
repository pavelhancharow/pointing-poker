import styled from 'styled-components';

type LabelType = {
  selectBox?: boolean;
  addCard?: boolean;
  settingsForm?: boolean;
};

export const Label = styled.label<LabelType>`
  margin: 0 0 9px 0;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: inherit;

  ${({ selectBox }) =>
    selectBox &&
    `
  margin: 0 63px 0 0;
  `}

  ${({ addCard }) =>
    addCard &&
    `
  margin: 0 0 30px 0;
  font-family: 'Ruda';
  `}

${(settingsForm) =>
    settingsForm &&
    `
  font-amily: 'Ruda';
  `}
`;

export const LabelFile = styled.label<LabelType>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 1;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  padding-left: 6px;
  font-size: 24px;
  line-height: 28px;
`;
