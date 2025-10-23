import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../store.ts";


const HomePage = () => {

    const todoLists = useSelector((state:RootState)=> state.todoList.todos)
    return (
        <div className={'container'}>
            {
                todoLists.map(item=>(
                    <Link to={'/list/'+item.id}>
                        {item.text}
                    </Link>
                ))
            }

        </div>

    )
}

export default HomePage;