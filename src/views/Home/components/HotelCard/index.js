import React from 'react';
import PropTypes from 'prop-types';

import * as s from './styles';
import Button from '../../../../components/Button';

function HotelCard(props) {
  const { hotel, onLike, onViewClick } = props;

  return (
    <div css={s.card}>
      <img src={hotel.image} css={s.image} alt={hotel.name} />
      <Button onClick={onLike} css={s.likeButton}>
        ❤
      </Button>
      <div css={s.content}>
        <div css={s.name}>{hotel.name}</div>
        <div css={s.city}>{hotel.city}</div>
        <div css={s.specs}>{hotel.specs}</div>
        <div css={s.priceContainer}>
          <div>
            <div css={s.fromText}>From</div>
            <div css={s.price}>
              ${hotel.price}
              <span css={s.perNightText}>/ per night</span>
            </div>
          </div>
          <Button onClick={onViewClick} css={s.viewButton}>
            View
          </Button>
        </div>
      </div>
    </div>
  );
}

HotelCard.defaultProps = {
  onViewClick: () => {},
  onLike: () => {}
};

HotelCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  hotel: PropTypes.object.isRequired,
  onViewClick: PropTypes.func,
  onLike: PropTypes.func
};

export default HotelCard;
