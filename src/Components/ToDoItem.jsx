import {  useState } from "react";



function ToDoItem(props){
    const [inputText, setinputText] = useState('');
   
    return (
        <>
            <div className="flex justify-center mt-8" >
                <input className="text-xl border-black bg-white text-black p-1" type="text" placeholder="Enter the Todo Item" value={inputText}
                 onChange={(e) => setinputText(e.target.value)} 
                
                 /> &nbsp;
                 
                <button className="bg-white  pr-2 pl-2 border-2 border-black rounded-md font-medium text-lg text-black " onClick={()=>{
                    props.addlist(inputText)
                    setinputText("")
                }}>Add Task</button>
              
            </div>
        </>
    );
};
export default ToDoItem;