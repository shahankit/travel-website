import { accomodations } from '../utils/consts';

export default function getPopularHotels() {
  return new Promise(resolve => resolve(accomodations));
}
