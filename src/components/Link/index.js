import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './styles';

function Link(props) {
  const { children, active, to, ...otherProps } = props;
  return (
    <StyledLink active={active} href={to} {...otherProps}>
      {children}
    </StyledLink>
  );
}

Link.defaultProps = {
  active: false
};

Link.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string.isRequired
};

export default Link;
