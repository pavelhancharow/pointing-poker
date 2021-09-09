import { FC } from 'react';
import { SwitchWrapp, SwitchInput, SwitchLabel } from './SwitcherStyle';

type SwitcherProps = {
  onChange: CallableFunction;
};

export const Switcher: FC<SwitcherProps> = (props): JSX.Element => {
  const { onChange } = props;

  return (
    <SwitchWrapp>
      <SwitchInput id="switcher" type="checkbox" onChange={(e) => onChange(e.target.checked)} />
      <SwitchLabel htmlFor="switcher" />
    </SwitchWrapp>
  );
};
