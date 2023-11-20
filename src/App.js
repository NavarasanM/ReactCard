import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Homepage from './pages/homepage';
import Postpage from './pages/postpage';
import Aboutpage from './pages/aboutpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Routes>
        <Route path='/postimage' element={<Postpage/>}/>
      </Routes>
      <Routes>
        <Route path='/about' element={<Aboutpage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;