import React from 'react';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';
import { RestartButton } from '../components/Navigation/NavigationButtons';
import NavigationButtonsContainer from '../components/Navigation/NavigationButtonsContainer';

const StyledImg = styled.img`
  width: 2rem;
  margin-bottom: 0.2rem;
`;

const Error = () => (
  <PageContainer title="ERROR">
    <StyledImg src="black_circled_x.png" alt="circled x" />
    <p>UH OH, SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER</p>
    <NavigationButtonsContainer>
      <RestartButton />
    </NavigationButtonsContainer>
  </PageContainer>
);

export default Error;
