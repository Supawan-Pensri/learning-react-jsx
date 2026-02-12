import { useState } from 'react';

import "./PersonList.css"
import User from './User';



export default function PersonList(props) {

    const {data} = props

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
                        <User key={item.id} item={item}/>
                    ))}

            </ul>
        </div>
    )
}