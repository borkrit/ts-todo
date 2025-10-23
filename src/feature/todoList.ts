import type {Todo} from "../components/TodoList/types.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface TodoState {
    todos:Todo[]
}

const initialState:TodoState ={
    todos:[]
}

export const todoSlice = createSlice({
    name:'todoList',
    initialState:initialState,
    reducers:{
        createAction:(state,action:PayloadAction<string>)=>{
            const newTodo:Todo = {
                id:state.todos.length,
                text:action.payload,
                isComplete:false,
            }
        state.todos=[...state.todos,newTodo]
        },
        updateAction:(state,action:PayloadAction<Todo>)=>{
            const newTodos = state.todos.map(item=>{
                if(item.id === action.payload.id){
                    item.isComplete = !item.isComplete;
                }
                return item
            })

            state.todos = newTodos
        },
        deleteAction:(state,action:PayloadAction<Todo>)=>{
            const newTodos = state.todos.filter(it=>it.id !== action.payload.id)

            state.todos = newTodos
        },
    }
})
export const { createAction ,updateAction,deleteAction } = todoSlice.actions
export default todoSlice.reducer