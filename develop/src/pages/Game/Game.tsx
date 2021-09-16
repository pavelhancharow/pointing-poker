import { FC } from 'react';
import { Container } from '../../shared/Container';
import { FlexBox } from '../../shared/FlexBox';
import { GameRunBox, ScoreBox, ScramMasterBox } from './Style/Style';
import { Heading } from './GameComponents/Heading/Heading';
import { ScramMaster } from './GameComponents/ScramMaster/ScramMaster';
import { Issues } from './GameComponents/Issues/Issues';
import { Score } from './GameComponents/Score/Score';
import { RunRound } from './GameComponents/RunRound/RunRound';

export const Game: FC = (): JSX.Element => {
  return (
    <Container maxWidth="1440px">
      <GameRunBox>
        <ScramMasterBox>
          <Heading />
          <ScramMaster />
          <FlexBox>
            <Issues />
            <RunRound />
          </FlexBox>
        </ScramMasterBox>
        <ScoreBox>
          <Score />
        </ScoreBox>
      </GameRunBox>
    </Container>
  );
};
