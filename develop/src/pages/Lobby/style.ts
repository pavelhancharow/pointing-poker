import styled from 'styled-components';
import { FlexBox } from '../../shared/FlexBox';

export const LobbyBox = styled(FlexBox)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

LobbyBox.defaultProps = {
  flexDirection: 'column',
  padding: '40px 26px 40px'
};

export const SectionBox = styled(FlexBox)`
  display: flex;
`;

SectionBox.defaultProps = {
  flexDirection: 'column',
  margin: '0 0 44px 0'
};

type ItemsBoxType = {
  flexWrap?: string;
  gap?: string;
};

export const ItemsBox = styled(FlexBox)`
  flex-wrap: ${({ flexWrap }: ItemsBoxType) => flexWrap};
  gap: ${({ gap }: ItemsBoxType) => gap};
`;

ItemsBox.defaultProps = {
  flexWrap: 'wrap',
  gap: '18px 13px'
};
