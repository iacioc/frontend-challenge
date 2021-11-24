import React from 'react';
import styled from 'styled-components';
import HiddenLabelInput from './HiddenLabelInput';

const StyledInput = styled.input`
  height: 1.5rem;
`;

const TextInput = ({ label, ...otherProps }) => (
  <HiddenLabelInput
    baseComponent={<StyledInput />}
    label={label}
    {...otherProps}
  />
);

export default TextInput;