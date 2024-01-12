import { useState } from 'react'

import './App.css'
import data from './assets.json'
import List from './components/List'
import Header from './components/Header'

function App() {

  return (
     <div className="app">
      <Header />
     <List data={data} />

     </div>
  )
}

export default App
