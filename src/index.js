import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoContainer from './functionBased/components/TodoContainer'
import './functionBased/App.css'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TodoContainer />}>
            </Route>           
          </Routes>         
        </BrowserRouter>        
    </React.StrictMode>,
    document.getElementById('root')
)

