import React from 'react'
import "./TodoList.css"
import { RiDeleteBin3Line, RiEditBoxLine } from "react-icons/ri";

function TodoList(props) {
    const { itemList,deleteItem } = props;
    return (
        <>
            {itemList.map((val) => {
                return (
                    <div className='item'>
                        <div className='value'>
                            <span>{val.itemName}</span>
                        </div>

                        <div className='btns'>
                            <span><RiDeleteBin3Line style={{cursor:"pointer"}} onClick={()=>deleteItem(val.id)}/></span>
                            <span><RiEditBoxLine stylee={{cursor:"pointer"}}/></span>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default TodoList
