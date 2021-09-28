import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './component/common/Navbar'
import Routes from './component/Routes';
import Footer from './component/common/Footer';


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div className=' bg-dark'>
        <Routes />
        <Footer />


      </div>


    </BrowserRouter>
  );
}

export default App;
