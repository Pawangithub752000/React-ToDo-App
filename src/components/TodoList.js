import React from 'react'
import "./TodoList.css"
import { RiDeleteBin3Line, RiEditBoxLine } from "react-icons/ri";

function TodoList(props) {
    const { itemList, deleteItem, editItem } = props;
    return (
        <>
            {itemList?.length !== 0 ?
                itemList.map((val) => {
                    return (
                        <div className='item'>
                            <div className='value'>
                                <span>{val.itemName}</span>
                            </div>

                            <div className='btns'>
                                <span><RiDeleteBin3Line style={{ cursor: "pointer" }} onClick={() => deleteItem(val.id)} /></span>
                                <span><RiEditBoxLine style={{ cursor: "pointer" }} onClick={() => editItem(val.id)} /></span>
                            </div>
                        </div>
                    )
                }) : <div className='noItemAdd'>No Item to Display....</div>}
        </>
    )
}

export default TodoList
