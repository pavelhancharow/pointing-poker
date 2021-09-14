import { FC } from 'react';
import { FlexBox } from '../../../../shared/FlexBox';
import { BlockBox, BlockTitle } from '../../style';

export const CardValues: FC = (): JSX.Element => (
  <BlockBox flexDirection="column" width="100%" gap="50px">
    <BlockTitle justifyContent="flex-start" width="100%">
      Add card values:
    </BlockTitle>
    <BlockBox gap="20px">
      <div style={{ width: '100px', height: '162px', border: '2px solid grey', borderRadius: '10px' }} />
      <div style={{ width: '100px', height: '162px', border: '2px solid grey', borderRadius: '10px' }} />
      <div style={{ width: '100px', height: '162px', border: '2px solid grey', borderRadius: '10px' }} />
      <div style={{ width: '100px', height: '162px', border: '2px solid grey', borderRadius: '10px' }} />
      <div style={{ width: '100px', height: '162px', border: '2px solid grey', borderRadius: '10px' }} />
    </BlockBox>
  </BlockBox>
);
