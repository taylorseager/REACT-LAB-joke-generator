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
        maxWidth: '900px',
        margin: '2rem auto',
      }}
    >
      <h1>Welcome to the Joke Generator 2.0!</h1>
      <h6>Be Prepared for Some Dad Jokes.</h6>
      <br />
      <Joke joke={joke} btnTxt={btnTxt} />
      <br />
      {btnTxt === 'Get A Dad Joke' || btnTxt === 'Get Another Dad Joke' ? (
        <Button variant="success" type="button" onClick={getJoke}>{btnTxt}</Button>
      ) : (
        <Button variant="warning" type="button" onClick={() => setBtnTxt('Get Another Dad Joke')}>{btnTxt}</Button>
      )}
    </div>
  );
}

export default Home;
