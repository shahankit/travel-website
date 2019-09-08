/* eslint-disable no-nested-ternary */

import styled from '@emotion/styled';

export default styled.button`
  padding: 10px;
  background-color: ${props =>
    props.filled ? (props.disabled ? '#d3d4d6' : '#fb4d4b') : 'transparent'};
  color: white;
  text-transform: ${props => (props.filled ? 'uppercase' : 'none')};
  border: none;
  outline: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  letter-spacing: 1px;
  font-size: ${props => (props.filled ? '12px' : '14px')};
  font-weight: 600;
  border-radius: 4px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease-in-out;

  &:not(:disabled):hover,
  &:not(:disabled):active {
    background-color: #fb8d8c;
  }
`;
