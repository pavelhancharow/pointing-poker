import styled from 'styled-components';
import { IStyles } from '../../../model/types';

import gameLogo from '../../../assets/image/img/game-logo.png';

const UnauthorizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 130px 26px 232px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GameLogo = styled.div`
  width: 550.09px;
  height: 149px;
  margin: 0 auto 40px;
  background-image: url(${gameLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const UnauthorizedBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 515px;
  margin-bottom: 6px;

  .description {
    line-height: 28px;

    &-bold {
      font-weight: 700;
      color: #66999b;
    }
  }
`;

const UnauthorizedBlockTitle = styled.span<IStyles>`
  display: inline-block;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #66999b;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  text-align: ${({ textAlign }) => textAlign};
`;

export { UnauthorizedContainer, GameLogo, UnauthorizedBlock, UnauthorizedBlockTitle };
