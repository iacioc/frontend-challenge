import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const StyledLoader = styled(Loader)`
  position: absolute;
  /* > 100% size plus negative margin to blur content edges */
  margin: -1%;
  width: 102%;
  height: 102%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
`;

const LoadingCircles = () => (
  <StyledLoader type="Circles" color="#686867" height={100} width={100} />
);

export default LoadingCircles;