import './Form.scss'
import {useState} from "react";

const Form =(props:{createTodo:Function})=>{
    const [text, setText] = useState('');

    const formSubmit = (event:React.SyntheticEvent)=>{
        event.preventDefault();
        if(text){
            props.createTodo(text)
            setText('')
        }
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input onChange={event=> setText(event.target.value)} value={text} type="text"/>
                    <button></button>
                </label>
            </form>
        </div>
    )
}
export default Form;