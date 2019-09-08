import React from 'react';
import { css } from '@emotion/core';
import { ContainerSize, Cities } from '../../utils/consts';
import Link from '../../../../components/Link';

const s = {
  root: css`
    max-width: ${ContainerSize}px;
    margin: 80px auto 0px;
  `,
  title: css`
    position: relative;
    font-size: 26px;
    font-weight: 600;
    padding-bottom: 20px;
    text-align: center;

    &::after {
      content: '';
      position: absolute;
      height: 2px;
      background-color: #fb4d4b;
      bottom: 0;
      width: 150px;
      left: calc(50% - 70px);
    }
  `,
  container: css`
    margin: 30px 180px;
    display: flex;
    flex-wrap: wrap;
  `,
  link: css`
    color: #fb4d4b;
    width: 120px;
  `
};

function renderCity(city) {
  return (
    <Link key={city.name} to={city.link} css={s.link}>
      {city.name}
    </Link>
  );
}

function PlacesToVisit() {
  return (
    <div css={s.root}>
      <div css={s.title}>Other top places to visit</div>
      <div css={s.container}>{Cities.map(renderCity)}</div>
    </div>
  );
}

export default PlacesToVisit;
