import React, { Component } from 'react';
import { observer, inject, disposeOnUnmount } from 'mobx-react';
import { reaction } from 'mobx';
import * as s from './styles';
import Button from '../../../../components/Button';
import HotelCard from '../../components/HotelCard';

@inject('model')
@observer
class PopularAccomodations extends Component {
  constructor(props) {
    super(props);

    this.rootRef = React.createRef();
    this.cardsContainerRef = React.createRef();

    disposeOnUnmount(this, [
      reaction(
        () => {
          const { model } = this.props;
          return model.store.popularSectionFocusRequested;
        },
        this.scrollIntoView,
        {
          delay: 300,
          fireImmediately: true
        }
      )
    ]);
  }

  scrollIntoView = required => {
    if (!required) {
      return;
    }
    this.rootRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    const { model } = this.props;
    model.actions.resetPopularSectionFocusRequsted();
  };

  handleScrollLeft = () => {
    const node = this.cardsContainerRef.current;
    const { scrollLeft, offsetWidth } = node;
    node.scrollTo({
      top: 0,
      left: scrollLeft - offsetWidth,
      behavior: 'smooth'
    });
  };

  handleScrollRight = () => {
    const node = this.cardsContainerRef.current;
    const { scrollLeft, offsetWidth } = node;
    node.scrollTo({
      top: 0,
      left: scrollLeft + offsetWidth,
      behavior: 'smooth'
    });
  };

  renderHotelCard = hotel => {
    return <HotelCard key={hotel.id} hotel={hotel} />;
  };

  render() {
    const { model } = this.props;
    const { popularHotels } = model.store;
    const { handleHotelsContainerScroll } = model.actions;

    if (popularHotels.length < 1) {
      return null;
    }

    const { isExtremeLeft, isExtremeRight } = model.store;

    return (
      <div css={s.root} ref={this.rootRef}>
        <div css={s.header}>
          <div css={s.title}>Browse from our popular accomodations</div>
          <div>
            <Button
              onClick={this.handleScrollLeft}
              disabled={isExtremeLeft}
              filled
              css={s.button}
            >
              Left
            </Button>
            <Button
              onClick={this.handleScrollRight}
              disabled={isExtremeRight}
              filled
              css={s.button}
            >
              Right
            </Button>
          </div>
        </div>
        <div
          css={s.cards}
          ref={this.cardsContainerRef}
          onScroll={handleHotelsContainerScroll}
        >
          {popularHotels.map(this.renderHotelCard)}
        </div>
      </div>
    );
  }
}

export default PopularAccomodations;
