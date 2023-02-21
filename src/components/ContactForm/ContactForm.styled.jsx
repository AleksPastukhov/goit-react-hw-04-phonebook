import styled from '@emotion/styled';

export const Form = styled.form`
  background-color: ${p => p.theme.colors.backgroundColors};
  color: ${p => p.theme.colors.colorText};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  // margin: 0 auto;
  box-shadow: ${p => p.theme.sectionShadow};
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Span = styled.span`
  margin-bottom: 3px;
`;

export const Input = styled.input`
  background-color: ${p => p.theme.colors.colorElement};
  color: ${p => p.theme.colors.btnСolorText};
  padding: 5px;
  font-weight: 700;
  &:hover,
  &:active,
  &:focus {
    background-color: ${p => p.theme.colors.white};
    outline: transparent;
  }
`;

export const Button = styled.button`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border-radius: 20px;
  padding: 7px 10px;
  border: 0;
  font-size: 18px;
  transition: box-shadow 250ms ease, transform 250ms ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.boxShadow};
  }
`;
