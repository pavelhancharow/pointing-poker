import { FC } from 'react';
import { SectionBox } from '../style';
import { InfoTitle } from './InfoTitle';
import { InfoMaster } from './InfoMaster';
import { LinkTitle } from './style';
import { InfoLink } from './InfoLink';
import { InfoButtons } from './InfoButtons';

export const Info: FC = (): JSX.Element => {
  return (
    <SectionBox>
      <InfoTitle />
      <InfoMaster />
      <LinkTitle>Link to lobby:</LinkTitle>
      <InfoLink />
      <InfoButtons />
    </SectionBox>
  );
};
