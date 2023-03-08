import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register';
import { CheckSession } from './services/Auth';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import LeaguePage from './components/LeaguePage';
import PostDetails from './components/PostDetails'



function App() {
  const [user, setUser] = useState(null)
  let navigate = useNavigate()
  
  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }
  const checkToken  = async () => {
    const user = await CheckSession()
    
    setUser(user)
    
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      checkToken()
    }
  }, [])
  
    return (
    <div>
      <Navbar 
      user={user}
      handleLogOut={handleLogOut}
      />
      <div className="App">
        <main className='bg-'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login setUser={setUser}/>} />
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/leaguePage/:id' element={<LeaguePage user={user}/>} />
            <Route path='/postDetails/:id' element={<PostDetails user={user}/>} />
          </Routes>
          </main>
      </div>
    </div>
  );
}

export default App;
