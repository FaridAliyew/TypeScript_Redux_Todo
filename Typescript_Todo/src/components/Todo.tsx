import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";



function Todo() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop:'20px', border:'1px solid lightgrey', padding:'12px 0'}}>
            <div>Todos....</div>
            <div>
                <IoIosRemoveCircleOutline style={{ fontSize: '22px', cursor: 'pointer' }} />
                <CiCircleCheck style={{ fontSize: '22px', cursor: 'pointer' }} />
                <CiEdit style={{ fontSize: '22px', cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default Todo