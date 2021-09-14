import { FC } from 'react';
import { PopUp, PopUpWrap } from '../../../shared/Popup';
import { CreateIssueForm } from '../../../components/Form/CreateIssue';
import { KickPlayer } from '../../../components/Form/KickPlayer';

export const Modal: FC = (): JSX.Element => {
  return (
    <PopUpWrap>
      <PopUp alignItems="center">
        {/* <CreateIssueForm /> */}
        {/* <KickPlayer /> */}
      </PopUp>
    </PopUpWrap>
  );
};
