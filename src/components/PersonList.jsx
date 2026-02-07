import { useState } from 'react';
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg"
import "./PersonList.css"



export default function PersonList() {

    const [data, setData] = useState([
        { id: 1, name: "jib", gender: "ชาย" },
        { id: 2, name: "น้ำ", gender: "หญิง" },
        { id: 3, name: "โจ้", gender: "ชาย" },
        { id: 2, name: "พลอย", gender: "หญิง" },
    ])

    const [show, setShow] = useState(true)
    return (
        <div class="container">
            <div className="header">
                <h1 style={{color:"orange"}}>จำนวนประชากร {data.length} คน</h1>

                <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
            </div>

            <ul>
                {show &&
                    data.map((item) => (
                        // <li key={item.id} style={{borderStyle:'solid',borderColor:item.gender == "ชาย" ? "blue":"pink"}}>
                        <li key={item.id}>
                            <img src={item.gender == "ชาย" ? boy : girl} alt="" width={50} height={50} />
                            <p>
                                {item.name} | {item.gender}
                            </p>
                            <div className="control">
                                <button>ลบ</button>
                            </div>
                        </li>
                    ))}

            </ul>
        </div>
    )
}