import { css } from '@emotion/core';

export const card = css`
  width: 300px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 9px 0 rgba(34, 49, 66, 0.41);
  position: relative;
  margin-right: 20px;
`;

export const image = css`
  width: 300px;
  height: 180px;
  background-color: #bdbdbd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const likeButton = css`
  position: absolute;
  right: 10px;
  top: 165px;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  color: #fb4d4b;
  font-size: 14px;
  background-color: #e3e3e3;
  padding: 0;

  &:hover,
  &:active {
    color: white;
  }
`;

export const content = css`
  margin-top: -6px;
  padding: 20px;
`;

export const name = css`
  font-weight: 600;
  font-size: 18px;
`;

export const city = css`
  margin-top: 6px;
  font-weight: 500;
  color: #fb4d4b;
`;

export const specs = css`
  margin-top: 8px;
  font-weight: 500;
  font-size: 14px;
  color: gray;
`;

export const priceContainer = css`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const fromText = css`
  font-size: 12px;
  text-transform: uppercase;
  color: gray;
  letter-spacing: 1px;
  font-weight: 500;
`;

export const price = css`
  font-size: 28px;
  font-weight: 600;
`;

export const perNightText = css`
  font-size: 12px;
  color: gray;
  margin-left: 6px;
`;

export const viewButton = css`
  height: 34px;
  width: 86px;
  border-radius: 17px;
  padding: 8px;
`;
