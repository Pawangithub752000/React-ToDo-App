
import React, { useState } from 'react'
import './App.css';
import uuid from 'react-uuid';
import TodoList from './components/TodoList';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [item, setItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [toggleBtn, setToggleBtn] = useState(false)
  const [itemId, setItemId] = useState();

  function handleChange(e) {
    setItem(e.target.value)
  }

  function addItem() {
    if (toggleBtn) {
      const newList = itemList.map((todo) => {
        if (todo.id === itemId) {
          return { ...todo, itemName: item }
        }
        return todo;
      })
      setItemList(newList);
      setToggleBtn(false);
      setItem("");
      setItemId();
      toast.info('Item added successfully...');

    } else {
      const itemObj = { id: uuid(), itemName: item }
      setItemList((prevItem) => [...prevItem, itemObj]);
      toast.success('Item added successfully...')
    }

  }

  function deleteItem(id) {
    console.log(id)
    const filterItem = itemList.filter((value) => {
      return value.id !== id;
    })
    setItemList(filterItem)
    toast.error('Item deleted successfully...')
  }

  function deleteAll() {
    setItemList([])
    toast.error('All Item deleted successfully...')
  }

  function editItem(id) {
    const editTodo = itemList.find((todo) => {
      return todo.id === id;
      //Note:- yaha pr find function ke place pr filter isliye nhi lagaye gya kyuki filter function array of object
      //deta hai jisme ki id ko find karne ke liye thora jada code likhna parta but find use karne pr direct mughe object hi
      //mil jata hai jisse id ko find karna simple ho jata hai 
    })
    //  console.log("editTodo",editTodo);
    console.log("id", id);
    setItem(editTodo.itemName);
    setToggleBtn(true)
    setItemId(id);
    // setItem("");
  }

  return (
    <div className='App'>
      <div className='parent_div'>
        <h1>React To-Do List App</h1>
        <div className='upper_half'>
          <div className='input_div'>

            <span><input type="search" className='searchInput' placeholder="To-Do..." value={item} onChange={handleChange} /></span>
          </div>
          <div className='btn-div'>
            <button
              className='add_btn'
              onClick={addItem}
              disabled={item.length <= 2 ? true : false}
            >
              {toggleBtn ? "Update Item" : "Add Item"}
            </button>
            <button className='deleteAll_btn' onClick={deleteAll}>
              Delete All
            </button>
          </div>
        </div>
        <div className='lower_half'>
          <TodoList itemList={itemList} deleteItem={deleteItem} editItem={editItem} />
          <ToastContainer theme='colored' />
        </div>
      </div>
    </div>
  )
}

export default App

