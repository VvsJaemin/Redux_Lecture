
import {Counter, CounterContainer, CounterSliceContainer } from 'counter/index'
import {Todo, todos, TodoApp} from 'todos/index'
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
      <Route exact path='/todos/to-do' component={Todo} />
      <Route exact path='/todos/to-dos' component={todos} />
      <Route exact path='/todos/todo-app' component={TodoApp}/>
      </div>
</>
  );
}

export default App;
