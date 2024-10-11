import { useEffect } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import Headers from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    Swal.fire({
      title: 'Welcome!',
      text: 'We are glad to have you here. Enjoy browsing!',
      icon: 'success',
      confirmButtonText: 'Let\'s go!',
      background: '#f9f9f9',
      customClass: {
        popup: 'animated fadeInDown faster'
      }
    });
  }, []);

  return (
    <>
      <Headers />
      <Main />
      <Footer />
    </>
  );
}

export default App;
