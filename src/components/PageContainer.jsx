import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 31.25rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledTitle = styled.h3`
  align-self: center;
  font-weight: normal;
  margin-top: 1.5625rem;
`;

const PageContainer = ({ title, children }) => (
  <StyledContainer>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </StyledContainer>
);

export default PageContainer;
