import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.colorText};
  margin-bottom: 20px;
  margin-top: 0;
  text-align: center;
  font-size: 34px;
`;

export const Subtitle = styled.h2`
  color: ${p => p.theme.colors.colorText};
  margin-bottom: 10px;
  margin-top: 0;
  text-align: center;
  font-size: 28px;
`;

export const Container = styled.div`
  min-width: 430px;
  box-shadow: ${p => p.theme.sectionShadow};
  padding: 10px;
  border-radius: 10px;
`;
