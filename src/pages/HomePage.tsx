import type {Todo} from "../components/TodoList/types.ts";
import {Link} from "react-router-dom";

interface ComponentProps{
    todos:Todo[]
}

const HomePage = ({todos}:ComponentProps) => {


    return (
        <div className={'container'}>
            {
                todos.map(item=>(
                    <Link to={'/list/'+item.id}>
                        {item.text}
                    </Link>
                ))
            }

        </div>

    )
}

export default HomePage;