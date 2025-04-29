import React from 'react'
import {BrowserRouter as Router ,Routes ,Route,Link} from "react-router-dom"
import AddBook from './Components/Addbook'
import Delete from './Components/Deletebook'
import UpdateBook from './Components/UpdateBook'
import View from './Components/Viewbook'
import Search from './Components/Searchbook'
import "./App.css"
const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to ="/add">Addbook</Link>
          <Link to ="/update">UpdateBook</Link>
          <Link to ="/serch">Searchbook</Link>
          <Link to ="/view">Viewbook</Link>
          <Link to ="/delete">Deletebook</Link>
        </nav>
        <Routes>
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/update' element={<UpdateBook/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App