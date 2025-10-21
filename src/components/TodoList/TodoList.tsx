import './TodoList.scss'
import TodoListItem from "./TodoListItem/TodoListItem.tsx";
import type {Todo} from "./types.ts";


const TodoList = ({todoLists,updateTodo,deleteTodo}: { todoLists: Todo[], updateTodo: Function, deleteTodo: Function }) => {


    const chekedItems = (type: 'completed' | 'failed') => {
        return todoLists.filter(item => type === "failed" ? !item.isComplete : item.isComplete).map(item => {
            return <TodoListItem todoItem={item}
                                 updateTodo={updateTodo}
                                 deleteTodo={deleteTodo}

            />

        })
    }
    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {
                    chekedItems('failed')
                }
            </ul>
            <ul className="todo-list completed">
                {
                    chekedItems('completed')
                }
            </ul>
        </div>
    )
}
export default TodoList;