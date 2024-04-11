/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="wholeApp">
        <NavBar />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
