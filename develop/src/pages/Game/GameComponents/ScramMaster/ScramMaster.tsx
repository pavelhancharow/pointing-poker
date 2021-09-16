import { FC } from 'react';
import { TextContainer } from '../../Style/Style';
import { CardBox, CardText } from '../../../../shared/CardBox';
import { Avatar } from '../../../../shared/Avatar';
import { Button } from '../../../../shared/Button';
import { FlexBox } from '../../../../shared/FlexBox';

export const ScramMaster: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" alignItems="flex-end" margin="30px 0 0 0" padding="0 128px 0 37px">
      <FlexBox flexDirection="column">
        <TextContainer fontSize="12px">Scram master:</TextContainer>
        <CardBox width="298px" height="75px" justifyContent="space-around">
          <Avatar width="50px" height="50px" fontSize="24px">
            RG
          </Avatar>
          <CardText justifyContent="center" fontSize="30px" lineHeight="25px">
            <span className="title">Rick Giligan</span>
            <span className="description">lead software engeneer</span>
          </CardText>
        </CardBox>
      </FlexBox>
      <Button color=" #2B3A67" background="#ffffff">
        Stop Game
      </Button>
    </FlexBox>
  );
};
