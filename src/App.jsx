import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Moviebox from './pages/movie box/Moviebox';

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/:id' element={<Moviebox />}/>
      </Routes>
    </div>
    
  )
}

export default App
