import './TodoList.scss'
import TodoListItem from "./TodoListItem/TodoListItem.tsx";

const TodoList = ()=>{
    return (
        <div className="todo-container">
            <ul className="todo-list failed">
              <TodoListItem />
            </ul>
            <ul className="todo-list completed">
                <TodoListItem />
            </ul>
        </div>
    )
}
export default TodoList;