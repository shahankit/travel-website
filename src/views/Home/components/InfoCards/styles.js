import { css } from '@emotion/core';
import { ContainerSize } from '../../utils/consts';

export const root = css`
  max-width: ${ContainerSize}px;
  margin: -100px auto 0px;
  height: 334px;
  display: flex;
  justify-content: space-between;
`;

export const card = css`
  height: 100%;
  width: 372px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 9px 0 rgba(34, 49, 66, 0.41);
`;

export const imageContainer = color => css`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: ${color};
  margin: 28px auto;
`;

export const cardTitle = css`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

export const description = css`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: gray;
  margin: 10px 40px;
  line-height: 24px;
`;
