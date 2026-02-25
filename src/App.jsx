import { useState, useEffect } from 'react'
import Header from './components/Header';
import PersonList from './components/PersonList';
import "./index.css"
import "./app.css"
import AddForm from './components/AddForm';



function App() {

  const [data, setData] = useState([
    // { id: 1, name: "jib", gender: "ชาย" },
    // { id: 2, name: "น้ำ", gender: "หญิง" },
    // { id: 3, name: "โจ้", gender: "ชาย" },
    // { id: 4, name: "พลอย", gender: "หญิง" },
  ])

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light")


  function deleteUser(id) {

    const result = data.filter((user) => user.id !== id)
    setData(result)
  }

  useEffect(() => {
    localStorage.setItem("mode",theme)
  },[theme])
  return (
    <div className={theme}>
      <div class="App">
        <Header title="แอพจัดการข้อมูลประชากร" theme={theme} setTheme={setTheme} />
        <main>
          <AddForm data={data} setData={setData} />
          <PersonList data={data} deleteUser={deleteUser} />
        </main>

      </div>
    </div>
  )
}

export default App
