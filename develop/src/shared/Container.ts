import styled from 'styled-components';

type ContainerType = {
  maxWidth?: string;
  margin?: string;
};

export const Container = styled.div<ContainerType>`
  max-width: ${({ maxWidth }) => maxWidth};
  margin: ${({ margin }) => margin};
`;

Container.defaultProps = {
  maxWidth: '1232px',
  margin: '0 auto'
};
