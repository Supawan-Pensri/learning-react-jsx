import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg"

export default function User({item,deleteUser}) {
    return (
        <>
            <li >
                <img src={item.gender == "ชาย" ? boy : girl} alt="" width={50} height={50} />
                <p>
                    {item.name} | {item.gender}
                </p>
                <div className="control">
                    <button onClick={()=>deleteUser(item.id)}>ลบ</button>
                </div>
            </li>
        </>
    )
}