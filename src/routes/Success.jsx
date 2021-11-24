import React from 'react';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';
import { RestartButton } from '../components/Navigation/NavigationButtons';
import NavigationButtonsContainer from '../components/Navigation/NavigationButtonsContainer';

const StyledImg = styled.img`
  width: 2rem;
  margin-bottom: 0.2rem;
`;

const Success = () => (
  <PageContainer title="SUCCESS!">
    <StyledImg src="/checkmark.png" alt="checkmark" />
    <p>YOU SHOULD RECEIVE A CONFIRMATION EMAIL SOON.</p>
    <NavigationButtonsContainer>
      <RestartButton />
    </NavigationButtonsContainer>
  </PageContainer>
);

export default Success;
