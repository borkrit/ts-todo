import Form from "../components/Form/Form.tsx";
import TodoList from "../components/TodoList/TodoList.tsx";
import type {Todo} from "../models/types.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store.ts";
import {createAction, deleteAction, updateAction} from "../feature/todoList.ts";

const TodoListPages = ()=>{

    const todoLists = useSelector((state:RootState)=> state.todoList.todos)
    const dispatch = useDispatch()


    const createTodo =(text:string)=>{
      dispatch(createAction(text))
    }

    const updateTodo =(todoItem:Todo)=>{

       dispatch(updateAction(todoItem))
    }

    const deleteTodo =(todoItem:Todo)=>{
     dispatch(deleteAction(todoItem))
    }

    return (
        <>
            <Form createTodo={createTodo} />
            <TodoList todoLists={todoLists}
                      updateTodo={updateTodo}
                      deleteTodo={deleteTodo}
            />
        </>
    )
}
export default TodoListPages;