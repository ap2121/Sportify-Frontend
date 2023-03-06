import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom'
import LeaguePage from './components/LeaguePage';


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
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/leaguePage/:id' element={<LeaguePage />} />
          </Routes>
          </main>
      </div>
    </div>
  );
}

export default App;
