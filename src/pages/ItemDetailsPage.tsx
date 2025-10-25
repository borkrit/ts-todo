import {Link, useNavigate, useParams} from "react-router-dom";
import type {Todo} from "../models/types.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../store.ts";



const ItemDetailsPage =()=>{
   const { id } = useParams();
   const navigate = useNavigate();
    const todoLists = useSelector((state:RootState)=> state.todoList.todos)
   const [todo,setTodo] = useState<Todo>()

    useEffect(()=>{
        const getActiveTodo = todoLists.find(item=> String(item.id) === id)

        if(getActiveTodo){
            setTodo(getActiveTodo)
        }else {
            navigate(`/404`)
        }

    },[todoLists,id,navigate])

    return(
        <div className="container">
            <Link to={'/'}> Back </Link>
            title {todo?.text}
        </div>
    )
}
export default ItemDetailsPage;