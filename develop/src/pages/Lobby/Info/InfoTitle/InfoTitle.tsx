import { FC } from 'react';
import { Pen } from '../../../../shared/style/IconsBox';
import { TitleInput } from '../../../../shared/style/Title';
import { TitleBox } from './style';

export const InfoTitle: FC = (): JSX.Element => {
  return (
    <TitleBox>
      <TitleInput type="text" defaultValue="Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)" />
      <Pen className="edit" />
    </TitleBox>
  );
};
