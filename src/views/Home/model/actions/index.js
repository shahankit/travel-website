import { action, runInAction } from 'mobx';
import debounce from 'lodash/debounce';
import getPopularHotels from '../../requests/getPopularHotels';

class Actions {
  constructor(store) {
    this.store = store;
  }

  @action
  syncProps(props) {
    this.props = props;
    this.store.sync(props);
  }

  @action
  handleSeachTextChange = e => {
    this.store.searchText = e.target.value;
  };

  @action
  handleCheckInChange = e => {
    this.store.checkIn = new Date(e.target.value).toISOString();
  };

  @action
  handleCheckOutChange = e => {
    this.store.checkOut = new Date(e.target.value).toISOString();
  };

  @action
  handleGuestsChange = e => {
    this.store.guests = parseInt(e.target.value, 10);
  };

  @action
  handleCheckAvailability = async () => {
    const { searchText, checkIn, checkOut, guests } = this.store;
    const popularHotels = await getPopularHotels(
      searchText,
      checkIn,
      checkOut,
      guests
    );
    runInAction(() => {
      this.store.popularHotels = popularHotels;
      this.store.popularSectionFocusRequested = true;
    });
  };

  @action
  resetPopularSectionFocusRequsted = () => {
    this.store.popularSectionFocusRequested = false;
  };

  @action
  handleHotelsContainerScrollDebounced = debounce(
    ({ scrollLeft, scrollWidth, offsetWidth }) => {
      this.store.isExtremeLeft = scrollLeft === 0;
      this.store.isExtremeRight = scrollLeft === scrollWidth - offsetWidth;
    },
    200
  );

  @action
  handleHotelsContainerScroll = e => {
    const { scrollLeft, scrollWidth, offsetWidth } = e.target;
    this.handleHotelsContainerScrollDebounced({
      scrollLeft,
      scrollWidth,
      offsetWidth
    });
  };
}

export default Actions;
