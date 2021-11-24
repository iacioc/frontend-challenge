import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';
import { BackButton } from '../components/Navigation/NavigationButtons';
import BaseButton from '../components/Navigation/BaseButton';
import NavigationButtonsContainer from '../components/Navigation/NavigationButtonsContainer';
import LoadingCircles from '../components/LoadingCircles';

const StyledUnorderedList = styled.ul`
  margin-top: 0;
  padding-left: 20px;
`;

const Confirmation = () => {
  const {
    values: { firstName, email, password, favoriteColor, agreedToTerms }
  } = useFormikContext();
  const [submitting, setSubmitting] = useState(false);

  return (
    <PageContainer title="CONFIRMATION">
      { submitting && <LoadingCircles /> }
      <StyledUnorderedList>
        <li>FIRST NAME: {firstName.toUpperCase()}</li>
        <li>E-MAIL: {email.toUpperCase()}</li>
        <li>PASSWORD: {password.replace(/./g, '*')}</li>
        <li>FAVORITE COLOR: {favoriteColor.toUpperCase()}</li>
        <li>TERMS AND CONDITIONS: {agreedToTerms ? 'AGREED' : 'DENIED'}</li>
      </StyledUnorderedList>
      <NavigationButtonsContainer>
        <BackButton url="/more-info" text="BACK" />
        <BaseButton text="SUBMIT" type="submit" onClick={() => setSubmitting(true)} />
      </NavigationButtonsContainer>
    </PageContainer>
  );
};

export default Confirmation;
