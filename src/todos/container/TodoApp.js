import React from 'react'
import 'todos/style/TodoStyle.css'
import {AddTodo, Todos, CompletedTodos} from 'todos/index'
import {addTodo} from 'todos/reducer/todo.reducer'
import { useSelector } from 'react-redux'
const TodoApp = () => {

  const todos = useSelector(state =>(state.todoReducer))

    return (<div className="container todo">
  <AddTodo addTodo={addTodo}/>
  <Todos todos={todos}/>
    <CompletedTodos/>
</div>)
}
export default TodoApp