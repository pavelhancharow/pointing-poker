import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockTitle, Description } from '../style';
import { Button } from '../../../shared/Button';
import { FlexBox } from '../../../shared/FlexBox';
import { setModalState } from '../../../store/action-creaters/action-creaters';
import { RootState } from '../../../store/types/todo';

export const NewGame: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const isModalState = useSelector((state: RootState) => state.modalReducer.modal);
  return (
    <FlexBox
      onClick={() => setModalState(dispatch, isModalState)}
      flexDirection="column"
      width="inherit"
      margin="0 0 6px 0"
    >
      <BlockTitle marginBottom="66px">Start your planning:</BlockTitle>
      <FlexBox alignItems="center" justifyContent="space-between">
        <Description>Create session:</Description>
        <Button>Start new game</Button>
      </FlexBox>
    </FlexBox>
  );
};
