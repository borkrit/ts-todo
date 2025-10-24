
import TodoListItem from "./TodoListItem/TodoListItem.tsx";
import type {Todo} from "./types.ts";
import {CompletedList, FailedList, TodoContainer} from "./TodoList.style.ts";


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
        <TodoContainer>

            <FailedList >
                {
                    chekedItems('failed')
                }
            </FailedList>
            <CompletedList >
                {
                    chekedItems('completed')
                }
            </CompletedList>
        </TodoContainer>
    )
}
export default TodoList;