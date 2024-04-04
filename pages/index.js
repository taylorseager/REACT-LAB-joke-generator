import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Joke from '../components/Joke';
import getAJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnTxt, setBtnTxt] = useState('Get A Dad Joke');

  const getJoke = () => {
    getAJoke().then((jokeObj) => {
      setJoke(jokeObj);
      setBtnTxt('Get A Punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '600px',
        margin: '2rem auto',
      }}
    >
      <h1>Welcome to the Joke Generator 2.0!</h1>
      <h2>Be Prepared for Some Dad Jokes.</h2>
      <Joke joke={joke} btnTxt={btnTxt} />
      {btnTxt === 'Get A Joke' || btnTxt === 'Get Another Joke' ? (
        <Button variant="success" type="button" onClick={getJoke}>{btnTxt}</Button>
      ) : (
        <Button variant="warning" type="button" onClick={() => setBtnTxt('Get Another Joke')}>{btnTxt}</Button>
      )}
    </div>
  );
}

export default Home;

// how to get h1/h2 tags to disappear when button is clicked
