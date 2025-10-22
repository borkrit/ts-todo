import Form from "../components/Form/Form.tsx";
import TodoList from "../components/TodoList/TodoList.tsx";
import type {Todo} from "../components/TodoList/types.ts";
import {useState} from "react";

const TodoListPages = ()=>{
    const [todos,setTodos] = useState<Todo[]>([])


    const createTodo =(text:string)=>{
        const newTodo:Todo = {
            id:todos.length,
            text:text,
            isComplete:false,
        }

        setTodos([...todos,newTodo])
    }

    const updateTodo =(todoItem:Todo)=>{

        const newTodos = todos.map(item=>{
            if(item.id === todoItem.id){
                item.isComplete = !item.isComplete;
            }
            return item
        })

        setTodos(newTodos)
    }

    const deleteTodo =(todoItem:Todo)=>{
        const newTodos = todos.filter(it=>it.id !== todoItem.id)

        setTodos(newTodos)
    }

    return (
        <>
            <Form createTodo={createTodo} />
            <TodoList todoLists={todos}
                      updateTodo={updateTodo}
                      deleteTodo={deleteTodo}
            />
        </>
    )
}
export default TodoListPages;