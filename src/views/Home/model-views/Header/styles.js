import { css } from '@emotion/core';
import { ContainerSize } from '../../utils/consts';

export const root = css`
  height: 925px;
  background-color: #111f49;
`;

export const container = css`
  max-width: ${ContainerSize}px;
  margin: auto;
`;

export const title = css`
  margin: 250px 0px 50px;
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-align: center;
`;
