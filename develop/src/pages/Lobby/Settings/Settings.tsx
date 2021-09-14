import { FC } from 'react';
import { FlexBox } from '../../../shared/FlexBox';
import { FormTitle, Label, Input } from '../../../shared/Form';
import { Switcher } from '../../../components/Switcher';
import { CardValues } from './CardValues';
import { BlockBox, BlockTitle } from '../style';

export const Settings: FC = (): JSX.Element => (
  <BlockBox flexDirection="column" width="100%" gap="50px">
    <BlockTitle justifyContent="center" width="100%">
      Settings:
    </BlockTitle>
    <BlockBox flexDirection="column" width="60%" gap="20px">
      <FlexBox justifyContent="space-between" alignItems="center">
        <Label htmlFor="adminasplayer">Scram master as player:</Label>
        <Switcher />
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center">
        <Label htmlFor="changecards">Changing card in round end:</Label>
        <Switcher />
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center">
        <Label htmlFor="adminasplayer">Is timer needed:</Label>
        <Switcher />
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center">
        <Label htmlFor="scoretype">Score type:</Label>
        <Input id="scoretype" />
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center">
        <Label htmlFor="scoretypeshort">Score type (Short):</Label>
        <Input id="scoretypeshort" />
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="flex-start">
        <Label htmlFor="roundtime">Round time:</Label>
        <div style={{ width: '200px', height: '80px', border: '1px solid grey', borderRadius: '8px' }} />
      </FlexBox>
      <CardValues />
    </BlockBox>
  </BlockBox>
);
