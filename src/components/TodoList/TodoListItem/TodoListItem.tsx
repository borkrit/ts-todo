import './TodoListItem.scss'
import type {Todo} from "../types.ts";
const TodoListItem = (props:{todoItem:Todo,deleteTodo:Function,updateTodo:Function})=>{
    return (
        <>
            <li className="todo-list-item__wrapper">
                <span>{props.todoItem.text}</span>
                <div className="todo-list-item__buttons">
                    <button className="btn-trash"
                        onClick={()=>props.deleteTodo(props.todoItem)}
                    ></button>
                    <button
                        onClick={()=>props.updateTodo(props.todoItem)}
                        className={props.todoItem.isComplete?'btn-check':'btn-uncheck'}></button>
                </div>
            </li>
        </>
    )
}
export default TodoListItem;