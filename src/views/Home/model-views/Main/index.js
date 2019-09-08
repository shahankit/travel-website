import React, { Component } from 'react';
import { observer } from 'mobx-react';

import * as s from './styles';
import Header from '../Header';
import InfoCards from '../../components/InfoCards';
import PlacesToVisit from '../../components/PlacesToVisit';
import PopularAccomodations from '../PopularAccomodations';

@observer
class Main extends Component {
  render() {
    return (
      <div css={s.root}>
        <Header />
        <InfoCards />
        <PopularAccomodations />
        <PlacesToVisit />
      </div>
    );
  }
}

export default Main;
