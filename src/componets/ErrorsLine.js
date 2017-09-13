import React from 'react';
import PropTypes from 'prop-types';;

const ErrorLine = ({ error }) =>  <span style={{color: 'red'}}>{error}</span>

ErrorLine.PropTypes = {
    error: PropTypes.string.isRequired
}

export default ErrorLine