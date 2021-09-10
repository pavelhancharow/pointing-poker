import { FC } from 'react';
import { SwitchWrapp, SwitchInput, SwitchLabel } from './SwitcherStyle';

type SwitcherProps = {
  onChange: CallableFunction;
};

export const Switcher: FC<SwitcherProps> = ({ onChange }): JSX.Element => {
  return (
    <SwitchWrapp>
      <SwitchInput id="switcher" type="checkbox" onChange={(e) => onChange(e.target.checked)} />
      <SwitchLabel htmlFor="switcher" />
    </SwitchWrapp>
  );
};
