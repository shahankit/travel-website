import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

function Button(props) {
  const { type, children, filled, ...otherProps } = props;
  return (
    <StyledButton type={type} filled={filled} {...otherProps}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
  filled: true
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  filled: PropTypes.bool
};

export default Button;
