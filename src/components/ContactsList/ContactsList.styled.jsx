import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 15px 30px;
  background-color: ${p => p.theme.colors.backgroundColors};
  border-radius: 10px;
  margin: 0;
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const Item = styled.li`
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  font-style: italic;
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
