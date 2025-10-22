import {Link, useNavigate, useParams} from "react-router-dom";
import type {Todo} from "../components/TodoList/types.ts";
import {useEffect, useState} from "react";

interface ComponentProps{
    todos:Todo[]
}

const ItemDetailsPage =({todos}:ComponentProps)=>{
   const { id } = useParams();
   const navigate = useNavigate();

   const [todo,setTodo] = useState<Todo>()

    useEffect(()=>{
        const getActiveTodo = todos.find(item=> String(item.id) === id)

        if(getActiveTodo){
            setTodo(getActiveTodo)
        }else {
            navigate(`/404`)
        }

    },[todos,id,navigate])

    return(
        <div className="container">
            <Link to={'/'}> Back </Link>
            title {todo?.text}
        </div>
    )
}
export default ItemDetailsPage;