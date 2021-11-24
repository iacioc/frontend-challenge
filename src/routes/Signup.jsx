import React from 'react';
import PageContainer from '../components/PageContainer';
import { NextButton } from '../components/Navigation/NavigationButtons';
import NavigationButtonsContainer from '../components/Navigation/NavigationButtonsContainer';
import TextInput from '../components/Inputs/TextInput';

const Signup = () => {
  const fieldsToCheck = ['firstName', 'email', 'password'];

  return (
    <PageContainer title="SIGN UP">
      <TextInput
        name="firstName"
        label="First Name"
        placeholder="FIRST NAME"
      />
      <TextInput
        name="email"
        label="Email"
        placeholder="EMAIL"
      />
      <TextInput
        name="password"
        label="Password"
        placeholder="PASSWORD"
        type="password"
      />
      <NavigationButtonsContainer>
        <NextButton fieldsToCheck={fieldsToCheck} url="/more-info" />
      </NavigationButtonsContainer>
    </PageContainer>
  );
};

export default Signup;
