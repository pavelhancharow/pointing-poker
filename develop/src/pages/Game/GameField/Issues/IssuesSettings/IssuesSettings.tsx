import { FC } from 'react';
import { FlexBox } from '../../../../../shared/FlexBox';
import { Timer } from '../../../../../components/Timer';
import { Button } from '../../../../../shared/style/Button';

export const IssuesSettings: FC = (): JSX.Element => {
  return (
    <FlexBox
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      height="144px"
      margin="68px 0 0 0"
    >
      <Timer
        disabled
        width="144px"
        height="63px"
        heightInput="43px"
        fontSize="48px"
        lineHeight="61"
        fontSizeBefore="10px"
        lineHeightBefore="13px"
      />
      <Button primary>Run Round</Button>
    </FlexBox>
  );
};
