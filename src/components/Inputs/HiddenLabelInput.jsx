import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { useField, useFormikContext, ErrorMessage } from 'formik';

const VisuallyHiddenLabel = styled.label`
  height: 1px !important;
  width: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
`;

const Container = styled.div`
  margin-bottom: 0.7rem;
`;

const HiddenLabelInput = ({ baseComponent, label, ...otherProps }) => {
  const [field] = useField(otherProps);
  const { errors, touched } = useFormikContext();
  const fieldName = otherProps.name;
  const hasErrorAndTouched = errors[fieldName] && touched[fieldName];

  return (
    <Container>
      <VisuallyHiddenLabel htmlFor={fieldName}>
        {label}
      </VisuallyHiddenLabel>
      {cloneElement(baseComponent, {
        'aria-required': true,
        'aria-invalid': (hasErrorAndTouched || undefined),
        'aria-describedby': (hasErrorAndTouched ? `${fieldName}-error` : undefined),
        ...field,
        ...otherProps
      })}
      <ErrorMessage name={fieldName}>
        {msg => (
          <div id={`${fieldName}-error`}>{msg}</div>
        )}
      </ErrorMessage>
    </Container>
  );
};

export default HiddenLabelInput;
