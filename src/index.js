import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoContainer from './functionBased/components/TodoContainer'
import About from './pages/About'
import NotMatch from './pages/NotMatch'
import './functionBased/App.css'

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoContainer />}></Route>
          <Route path='/about' element={<About />}></Route> 
          <Route path='*' element={<NotMatch />}></Route>            
        </Routes>         
      </BrowserRouter>        
    </React.StrictMode>,
    document.getElementById('root')
)

