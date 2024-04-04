import React from 'react';
import PropTypes from 'prop-types';
// import { propTypes } from 'react-bootstrap/esm/Image';

export default function Joke({ joke, btnTxt }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      {btnTxt !== 'Get A Punchline' ? <h3>{joke.delivery}</h3> : ''}
    </>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
  }).isRequired,
  btnTxt: PropTypes.string.isRequired,
};
