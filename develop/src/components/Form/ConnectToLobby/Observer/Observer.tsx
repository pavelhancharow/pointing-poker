import { FC } from 'react';
import { ObserverBox } from './style';
import { Switcher } from '../../../Switcher';

export const Observer: FC = (): JSX.Element => {
  return (
    <ObserverBox alignItems="center" justifyContent="space-between" width="229px" height="59px">
      <span className="text">Connect as Observer</span>
      <Switcher />
    </ObserverBox>
  );
};
