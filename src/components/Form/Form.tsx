import {useState} from "react";
import {FormBlock, FormButton, FormInput, FormLabel, FormWrapper} from "./FormStyle.style.ts";
import icon from '../../assets/images/plus.png'

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
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormInput onChange={event=> setText(event.target.value)} value={text} type="text"/>
                    <FormButton icon={icon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}
export default Form;