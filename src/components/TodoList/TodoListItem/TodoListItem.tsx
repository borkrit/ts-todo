import type {Todo} from "../../../models/types.ts";
import check from '../../../assets/images/check.png'
import uncheck from '../../../assets/images/uncheck.png'
import trash from '../../../assets/images/trash.png'
import {TodoListItemControl, TodoListItemsControls, TodoListItemWrapper} from "./TodoListItem.style.ts";


const TodoListItem = (props:{todoItem:Todo,deleteTodo:Function,updateTodo:Function})=>{
    return (
        <>
            <TodoListItemWrapper>
                <span>{props.todoItem.text}</span>
                <TodoListItemsControls>
                    <TodoListItemControl
                        icon={trash}
                        onClick={()=>props.deleteTodo(props.todoItem)}
                    ></TodoListItemControl>
                    <TodoListItemControl
                        icon={props.todoItem.isComplete? check : uncheck}
                        onClick={()=>props.updateTodo(props.todoItem)}
                        ></TodoListItemControl>
                </TodoListItemsControls>
            </TodoListItemWrapper>
        </>
    )
}
export default TodoListItem;