import styled from '@emotion/styled';

export const Button = styled.button`
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border-radius: 5px;
  padding: 2px 10px;
  border: 0;
  transition: box-shadow 250ms ease, transform 250ms ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.boxShadow};
  }
`;
