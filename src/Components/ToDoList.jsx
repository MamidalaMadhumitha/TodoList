import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

function ToDoList(props){

    
    return(
        <>
        <div className="inner-box flex justify-center items-center ">
        <li className=' text-2xl text-white border-2 border-white flex justify-between w-80 p-1 px-16 mt-2' >
            <input type="checkbox" />
            {props.item}
            <span>
            <FontAwesomeIcon className='faTrash' onClick={() => {
                props.deleteItem(props.index);
            }} icon={faTrash} />
            </span>
        </li>
        </div>
         
        </>
      
    );
    
}
export default ToDoList;