import { css } from '@emotion/core';
import { ContainerSize } from '../../utils/consts';

export const root = css`
  margin-top: 120px;
`;

export const header = css`
  max-width: ${ContainerSize}px;
  margin: auto;
  padding: 10px 0px;
  border-bottom: solid 2px lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const title = css`
  font-size: 26px;
  font-weight: 600;
`;

export const button = css`
  margin-left: 10px;
`;

export const cards = css`
  overflow-y: auto;
  padding: 20px;
  display: flex;

  &::after {
    content: '';
    flex: 0 0 1px;
  }
`;
