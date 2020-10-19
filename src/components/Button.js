import React from "react";
import PropTypes from 'prop-types';

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  text: PropTypes.string
}

Button.defaultProps = {
  text: 'Púlsame'
}

function Button({callback, text}) {
  return <button onClick={callback}>{text}</button>;
}

export default Button;