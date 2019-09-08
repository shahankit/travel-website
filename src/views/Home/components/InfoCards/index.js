import React from 'react';
import * as s from './styles';
import { CardInfo } from '../../utils/consts';

function renderCard(card, index) {
  return (
    <div css={s.card} key={index}>
      <div css={s.imageContainer(card.color)} />
      <div css={s.cardTitle}>{card.title}</div>
      <div css={s.description}>{card.description}</div>
    </div>
  );
}

function InfoCards() {
  return <div css={s.root}>{CardInfo.map(renderCard)}</div>;
}

export default InfoCards;
