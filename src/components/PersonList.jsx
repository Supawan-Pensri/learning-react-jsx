import { useState } from 'react';

export default function PersonList(){

    const [data, setData] = useState([
        { id: 1, name: "jib", gender: "ชาย" },
        { id: 2, name: "น้ำ", gender: "หญิง" },
        { id: 3, name: "โจ้", gender: "ชาย" }
    ])

    const [show,setShow] = useState(true)
    return(
        <>
        <h1>จำนวนประชากร {data.length} คน</h1>
        <button onClick={()=>setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
            <ul>
                {show &&
                data.map((item) => (
                    <li key={item.id}>{item.name} | {item.gender}</li>
                ))}

            </ul>
        </>
    )
}