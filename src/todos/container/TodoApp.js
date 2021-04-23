import React from 'react'
import 'todos/style/TodoStyle.css'
import {AddTodo, Todos, CompletedTodos} from 'todos/index'
import {addTodo, delTodo, delTodos, toggleTodo} from 'todos/reducer/todo.reducer'
import { useSelector } from 'react-redux'
const TodoApp = () => {

  const todos = useSelector(state =>(state.todos)) // 슬라이스 스토어 - > 스토어로 

    return (<div className="container todo">
  <AddTodo addTodo={addTodo}/>
  <Todos todos={todos} delTodo={delTodo} delTodos={delTodos} toggleTodo={toggleTodo}/>
    <CompletedTodos/>
</div>)
}
export default TodoApp