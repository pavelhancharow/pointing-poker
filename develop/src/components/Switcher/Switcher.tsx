import { FC } from 'react';
import { SwitcherBox } from './style';

type SwitcherProps = {
  onChange: CallableFunction;
};

export const Switcher: FC = (): JSX.Element => {
  return (
    <SwitcherBox>
      <input type="checkbox" />
      <span className="round" />
    </SwitcherBox>
  );
};
