import React from 'react';
import PropTypes from 'prop-types';

export default function MyComponent({ greeting = 'Hello', guests = [] }) {
  console.log(guests);
  return (
    <>
      <h1>
        {greeting} {guests.join(',')}
      </h1>
    </>
  );
}

MyComponent.propTypes = {
  /** The greeting to be rendered */
  greeting: PropTypes.string,
  /** An array of guests names */
  guests: PropTypes.arrayOf(PropTypes.string),
};

MyComponent.defaultProps = {
  greeting: 'Hello',
  guests: [],
};
