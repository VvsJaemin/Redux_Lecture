
import {Counter, CounterContainer, CounterSliceContainer } from 'counter/index'
import {Todos, TodoApp, ChangeTodo, CompletedTodos, AddTodo} from 'todos/index'
import Home from 'common/component/Home'
import { Route } from 'react-router-dom'


const App=()=> {
  return (
    <> 
 <div className="App">
      <Route exact path='/' component={ Home } />
      <Route exact path='/counter/counter' component={ Counter } />
      <Route exact path='/counter/redux-container' component={ CounterContainer } />
      <Route exact path='/counter/slice-container' component={ CounterSliceContainer } />
      <Route exact path='/todos/to-do' component={ChangeTodo} />
      <Route exact path='/todos/complete-do' component={CompletedTodos} />
      <Route exact path='/todos/to-dos' component={Todos} />
      <Route exact path='/todos/todo-app' component={TodoApp}/>
      <Route exact path='/todos/add-todo' component={AddTodo}/>
      </div>
</>
  );
}

export default App;
