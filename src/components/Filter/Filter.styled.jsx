import styled from '@emotion/styled';

export const Div = styled.div`
  background-color: ${p => p.theme.colors.backgroundColors};
  color: ${p => p.theme.colors.colorText};
  padding: 10px 20px;
  display: inline-block;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

export const Input = styled.input`
  background-color: ${p => p.theme.colors.colorElement};
  color: ${p => p.theme.colors.btnСolorText};
  border: transparent;
  padding: 5px;
  font-weight: 700;
  &:active,
  &:focus {
    outline: transparent;
  }
  transition: box-shadow 250ms ease, transform 250ms ease;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.boxShadow};
  }
`;
