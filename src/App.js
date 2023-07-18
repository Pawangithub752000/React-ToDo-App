
import React, { useState } from 'react'
import './App.css';
import uuid from 'react-uuid';
import TodoList from './components/TodoList';


function App() {
  const [item, setItem] = useState('')
  const [itemList, setItemList] = useState([])
  function handleChange(e) {
    setItem(e.target.value)
  }

  function addItem() {
    const itemObj = { id: uuid(), itemName: item }
    setItemList((prevItem) => [...prevItem, itemObj]);
    setItem("");
  }
  function deleteItem(id){
   console.log(id)
  const filterItem = itemList.filter((value)=>{
    return value.id !== id;
   })
   setItemList(filterItem)
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
            <span><button className='add_btn' onClick={addItem} disabled={item.length <=2 ? true:false}>Add Item</button></span>
            <span><button className='deleteAll_btn'>Delete All</button></span>
          </div>
        </div>
        <div className='lower_half'>
        <TodoList itemList={itemList} deleteItem={deleteItem}/>
        </div>
      </div>
    </div>
  )
}

export default App

