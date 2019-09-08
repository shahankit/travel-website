import React from 'react';
import * as s from './styles';
import Link from '../../../../components/Link';
import Button from '../../../../components/Button';

function NavBar() {
  return (
    <div css={s.root}>
      <div css={s.logo}>
        <span css={s.logoThin}>Chia</span> Travel
      </div>
      <div css={s.navBarButtons}>
        <Link active to="/" css={s.button}>
          Home
        </Link>
        <Link to="/destinations" css={s.button}>
          Destinations
        </Link>
        <Link to="/how-it-works" css={s.button}>
          How it works
        </Link>
        <Button filled={false} css={s.button}>
          Login
        </Button>
        <Button css={s.button}>Sign up</Button>
      </div>
    </div>
  );
}

export default NavBar;
