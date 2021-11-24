import React from 'react';
import styled from 'styled-components';
import HiddenLabelInput from './HiddenLabelInput';

const StyledSelect = styled.select`
  min-width: 18rem;
`;

const SelectDropdown = ({ label, ...otherProps }) => (
  <HiddenLabelInput
    baseComponent={<StyledSelect />}
    label={label}
    {...otherProps}
  />
);

export default SelectDropdown;