import './App.css';
import Header from "./Components/Header"
import ToDoList from './Components/ToDoList';
import ToDoItem from './Components/ToDoItem';
import { useState } from 'react';

function App() {
  const[listTodo,setlistTodo]=useState([]);

  let addlist = (inputText) => {
    if (inputText!=='')
      setlistTodo([...listTodo, inputText]);
  }
  const deleteItemList = (key)=>{
    let newlistTodo =[...listTodo];
    newlistTodo.splice(key,1)
    setlistTodo([...newlistTodo])
    } 
  return (
    <>
      <div className='flex flex-col items-center justify-center ' >
        <Header />
        <div className=' details border-white border-2' >
          <ToDoItem addlist={addlist} />
          {listTodo.map((listItem, i) => {
            return (
              <ToDoList key={i} index={i} item={listItem} deleteItem={deleteItemList} />
            )

          })}
        </div>
      </div>    

    </>
  )
};

export default App;

