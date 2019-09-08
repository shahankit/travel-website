import styled from '@emotion/styled';
import { css } from '@emotion/core';

export default styled.a`
  position: relative;
  padding: 10px;
  color: ${props => (props.active ? '#fb4d4b' : 'white')};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  ${props =>
    props.active
      ? css`
          &::after {
            content: '';
            position: absolute;
            height: 2px;
            background-color: #fb4d4b;
            bottom: 0;
            left: 10px;
            right: 10px;
          }
        `
      : ''}
`;
