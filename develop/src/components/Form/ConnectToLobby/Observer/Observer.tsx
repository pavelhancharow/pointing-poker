import { FC } from 'react';
import { ObserverBox } from './style';

export const Observer: FC = () => {
  return (
    <ObserverBox display="flex" alignItems="center" justifyContent="space-between" width="229px" height="59px">
      <span className="text">Connect as Observer</span>
      <span>xxxx</span>
    </ObserverBox>
  );
};
