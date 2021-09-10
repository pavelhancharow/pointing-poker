import styled from 'styled-components';

type PlayerAvatarProps = {
  imgSrc?: string | null;
  width?: string;
};

export const PlayerAvatar = styled.div<PlayerAvatarProps>`
  position: relative;
  width: ${({ width }) => width || '83px'};
  height: ${({ width }) => width || '83px'};
  background-color: #60dabf;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

export const PlayerAvatarInitials = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;
