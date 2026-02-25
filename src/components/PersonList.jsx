import { useState } from 'react';
import "./PersonList.css"
import User from './User';

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



export default function PersonList(props) {

    const {data,deleteUser} = props

    const [show, setShow] = useState(true)
    return (
        <div class="container">
            <div className="header">
                <h1 style={{color:"orange"}}>จำนวนประชากร {data.length} คน</h1>

                <span onClick={() => setShow(!show)}>{show ? <FaEyeSlash size={30}  /> : <FaEye size={30} />}</span>
            </div>

            <ul>
                {show &&
                    data.map((item) => (
                        // <li key={item.id} style={{borderStyle:'solid',borderColor:item.gender == "ชาย" ? "blue":"pink"}}>
                        <User key={item.id} item={item} deleteUser={deleteUser}/>
                    ))}

            </ul>
        </div>
    )
}