import { useState } from 'react'
import Header from './components/Header';
import PersonList from './components/PersonList';
import "./index.css"
import "./app.css"


function App() {



  return (
    <div class="App">
      <Header />
      <main>
        <PersonList />
      </main>

    </div>
  )
}

export default App
