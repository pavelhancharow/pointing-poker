import { FC } from 'react';
import { FlexBox } from '../../../shared/style/FlexBox';
import { Title } from '../../../shared/Title';
import { SettingsForm } from './SettingsForm';

export const GameSettings: FC = (): JSX.Element => (
  <FlexBox flexDirection="column">
    <Title>Game settings:</Title>
    <SettingsForm />
  </FlexBox>
);
