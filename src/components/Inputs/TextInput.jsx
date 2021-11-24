import React from 'react';
import styled from 'styled-components';
import HiddenLabelInput from './HiddenLabelInput';

const StyledInput = styled.input`
  height: 1.5rem;
`;

const TextInput = ({ label, ...otherProps }) => {
  // const [field] = useField(otherProps);
  // const { errors, touched } = useFormikContext();
  // const fieldName = otherProps.name;
  // const hasErrorAndTouched = errors[fieldName] && touched[fieldName];

  return (
    <HiddenLabelInput
      baseComponent={<StyledInput />}
      label={label}
      {...otherProps}
    />
  );
};

export default TextInput;