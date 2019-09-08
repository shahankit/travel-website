import { observable, computed } from 'mobx';

class RootStore {
  @observable.ref searchText = '';

  @observable.ref checkIn = '';

  @observable.ref checkOut = '';

  @observable.ref guests = 0;

  @observable.ref popularHotels = [];

  @observable.ref popularSectionFocusRequested = false;

  @observable.ref isExtremeLeft = true;

  @observable.ref isExtremeRight = false;

  @computed
  get isFormValid() {
    return (
      !!this.searchText && !!this.checkIn && !!this.checkOut && this.guests > 0
    );
  }

  sync() {
    this.userId = '12345';
  }
}

export default RootStore;
