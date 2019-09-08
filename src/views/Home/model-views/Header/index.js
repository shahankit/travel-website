import React from 'react';
import NavBar from '../../components/NavBar';
import PreferencesInput from '../PreferencesInput';

import * as s from './styles';

function Header() {
  return (
    <div css={s.root}>
      <div css={s.container}>
        <NavBar />
        <div css={s.title}>Book your perfect holiday rental, today</div>
        <PreferencesInput />
      </div>
    </div>
  );
}

export default Header;
