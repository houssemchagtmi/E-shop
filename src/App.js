import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Men from './components/Men';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Woman from './components/Woman';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Woman />} />
        <Route path='/men' element={<Men />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
