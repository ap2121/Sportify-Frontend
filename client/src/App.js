import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <main className='bg-'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          </main>
      </div>
    </div>
  );
}

export default App;
