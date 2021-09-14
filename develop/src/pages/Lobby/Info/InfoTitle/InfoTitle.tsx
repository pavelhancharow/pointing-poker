import { FC } from 'react';
import { Pen } from '../../../../shared/IconsBox';
import { TitleInput } from '../../../../shared/Title';
import { TitleBox } from './style';

export const InfoTitle: FC = (): JSX.Element => {
  return (
    <TitleBox>
      <TitleInput type="text" defaultValue="Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)" />
      <Pen className="edit" />
    </TitleBox>
  );
};
