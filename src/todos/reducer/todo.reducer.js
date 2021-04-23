import {createSlice} from '@reduxjs/toolkit'
import uuid from 'uuid/v4'

const initialState =[
    {id : 1, text: '리액트 학습', done : true},
    {id :2 , text : '리덕스 학습', done :true},
    {id :3 , text : '썽크 학습', done :false}
]

const todoSlice = createSlice({ //slice 객체
    name : 'todos',
    initialState,
    reducers:{ // 리듀서를 만들어주는 역할
        addTodo(state, {payload}){
            state.push({id :uuid(), text:payload, done : false})
        },
        delTodo(state, {payload}){
            alert(`리듀서 내부로 들어옴 : ${payload}+를+삭제`)
           state.splice(state.findIndex(todo=>todo.id===payload),1)
        //    return state.filter((todo)=>todo.id!==payload)
        
        },

            delTodos(state, {payload}){
                alert(`전체 삭제 : ${JSON.stringify(payload)}`)
                state.splice(payload)
            },

            toggleTodo(state, {payload}){
                alert(`리듀서내부  :  + ${payload}`)
               const toggle = state.find((todo)=>todo.id===payload) //find에 자체에 리턴이 보유 => functio
               toggle.done =!toggle.done
            } 
        }
})

const {actions, reducer} = todoSlice
export const {addTodo, delTodo, delTodos, toggleTodo} = actions // 리듀서에 액션을 보내겠다.

export default reducer