import styled from 'styled-components';

type FormTitleType = {
  marginBottom?: string;
};

export const FormTitle = styled.h3<FormTitleType>`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
`;

FormTitle.defaultProps = {
  marginBottom: '0'
};
