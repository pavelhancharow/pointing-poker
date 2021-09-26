import { FC } from 'react';
import { FlexBox } from '../../../../shared/style/FlexBox';
import { Title } from '../../../../shared/style/Title';

export const ScoreTitle: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-around" margin="0 0 30px 0">
      <Title marginBottom="0">Score:</Title>
      <Title marginBottom="0">Players:</Title>
    </FlexBox>
  );
};
