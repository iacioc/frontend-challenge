import React from 'react';
import styled from 'styled-components';
import { useField, useFormikContext, ErrorMessage } from 'formik';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
`;

const StyledLabel = styled.label`
  margin-left: 0.5rem;
`;

const TermsAndConditions = ({ children, ...otherProps }) => {
  const [field] = useField({ ...otherProps, type: 'checkbox' });
  const { errors, touched } = useFormikContext();
  const fieldName = otherProps.name;
  const hasErrorAndTouched = errors[fieldName] && touched[fieldName];

  return (
    <>
      <StyledContainer>
        <input
          aria-invalid={hasErrorAndTouched || undefined}
          aria-describedby={hasErrorAndTouched ? `${fieldName}-error` : undefined}
          {...field}
          {...otherProps}
          type="checkbox" 
        />
        <StyledLabel htmlFor={fieldName}>{children}</StyledLabel>
      </StyledContainer>
      <ErrorMessage name={fieldName}>
        {msg => (
          <div id={`${fieldName}-error`}>{msg}</div>
        )}
      </ErrorMessage>
    </>
  );
};

export default TermsAndConditions;