import { useState } from 'react'

import './App.css'
import data from './assets.json'
import List from './components/List'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {

  return (
     <div className="app">
      <Header />
      <div className='wrapper'>
        <SideBar data={ data } />
        <List data={ data } />
      </div>
    

     </div>
  )
}

export default App
