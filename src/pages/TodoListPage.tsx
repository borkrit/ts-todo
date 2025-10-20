import Form from "../components/Form/Form.tsx";
import Header from "../components/Header/Header.tsx";
import TodoList from "../components/TodoList/TodoList.tsx";

const TodoListPages = ()=>{
    return (
        <>
            <Header />
            <Form />
            <TodoList />
        </>
    )
}
export default TodoListPages;