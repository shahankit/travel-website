import { css } from '@emotion/core';

export const root = css`
  background-color: white;
  border-radius: 4px;
  height: 70px;
  display: flex;
`;

export const location = css`
  padding: 12px 25px;
  flex: 2;
  flex-shrink: 0;
`;

export const checkInOut = css`
  padding: 12px 20px;
  flex: 1;
  flex-shrink: 0;
`;

export const guests = css`
  padding: 12px 20px;
  flex: 1;
  flex-shrink: 0;
`;

export const separator = css`
  height: 100%;
  width: 1px;
  background-color: lightgray;
`;

export const title = css`
  font-weight: 600;
`;

export const input = css`
  margin-top: 2px;
  font-size: 14px;
  width: 100%;
`;

export const button = css`
  margin: 3px;
  flex: 1.5;
`;
