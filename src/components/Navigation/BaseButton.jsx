import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid black;
  text-decoration: none;
  margin-right: 0.3125rem;
  padding: 0.3125rem;
  color: black;
  background-color: white;

  &:hover, &:active {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

const BaseButton = ({ text, ...otherProps }) => {
  return (
    <StyledButton type="button" {...otherProps}>
      {text}
    </StyledButton>
  );
};

export default BaseButton;
