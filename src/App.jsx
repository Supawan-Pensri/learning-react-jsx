import { useState } from 'react'
import Header from './components/Header';
import PersonList from './components/PersonList';
import "./index.css"
import "./app.css"



function App() {

  const [data, setData] = useState([
    { id: 1, name: "jib", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "โจ้", gender: "ชาย" },
    { id: 4, name: "พลอย", gender: "หญิง" },
  ])

  return (
    <div class="App">
      <Header title="แอพจัดการข้อมูลประชากร" />
      <main>
        <PersonList data={data}/>
      </main>

    </div>
  )
}

export default App
