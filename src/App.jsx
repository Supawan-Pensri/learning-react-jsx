import { useState } from 'react'
import Header from './components/Header';
import PersonList from './components/PersonList';


function App() {
  const name = "jib"
  const [age, setAge] = useState(30);


  return (
    <>
      <Header />
      <PersonList />



    </>
  )
}

export default App
