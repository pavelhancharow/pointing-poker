import styled from 'styled-components';
import { FlexBox } from '../../../shared/FlexBox';

export const ScramMasterBox = styled(FlexBox)`
  width: 970px;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
`;

type TextContainerType = {
  fontSize?: string;
  fontWeight?: string;
};

export const TextContainer = styled.h3`
  font-size: ${({ fontSize }: TextContainerType) => fontSize};
  font-weight: ${({ fontWeight }: TextContainerType) => fontWeight};
  line-height: 30px;
`;

TextContainer.defaultProps = {
  fontSize: '24px',
  fontWeight: 'bold'
};

export const GameRunBox = styled(FlexBox)`
  justify-content: space-between;
`;

export const ScoreBox = styled(FlexBox)`
  width: 478px;
`;

export const RunRoundBox = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  margin: 172px 0 0 67px;
`;
