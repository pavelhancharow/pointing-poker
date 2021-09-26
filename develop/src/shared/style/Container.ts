import styled from 'styled-components';

type ContainerProps = {
  standard?: boolean;
  wide?: boolean;
};

export const Container = styled.div<ContainerProps>`
  max-width: 1232px;
  margin: 0 auto;

  ${({ standard }) =>
    standard &&
    `
    max-width: 1000px;
    `}

  ${({ wide }) =>
    wide &&
    `
    max-width: 1440px;
    `}
`;
