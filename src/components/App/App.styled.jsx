import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 800px;
  background-color: ${p => p.theme.colors.backgroundColorsPrimary};
  padding: 10px 20px 20px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: ${p => p.theme.insideShadow};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
