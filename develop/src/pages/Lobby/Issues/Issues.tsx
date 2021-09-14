import { FC } from 'react';
import { FlexBox } from '../../../shared/FlexBox';
import { UserCard } from '../../../components/UserCard';
import { BlockBox, BlockTitle } from '../style';

export const Issues: FC = (): JSX.Element => (
  <BlockBox flexDirection="column" alignItems="flex-start" width="100%" gap="50px">
    <BlockTitle justifyContent="center" width="100%">
      Issues:
    </BlockTitle>
    <BlockBox flexWrap="wrap" gap="20px" width="100%">
      <div style={{ width: '300px', height: '76px', border: '1px solid grey', borderRadius: '4px' }} />
      <div style={{ width: '300px', height: '76px', border: '1px solid grey', borderRadius: '4px' }} />
    </BlockBox>
  </BlockBox>
);
