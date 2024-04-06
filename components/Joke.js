import React from 'react';
import PropTypes from 'prop-types';

export default function Joke({ joke, btnTxt }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <br />
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
