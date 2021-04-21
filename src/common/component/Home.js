import React from 'react'
import Counter from 'counter/component/Counter'
import CounterContainer from 'counter/container/CounterContainer'
import CounterSliceContainer from 'counter/container/CounterSliceContainer'
import {Link} from 'react-router-dom'
const Home = () => {

    return(
            <>
            <li>
            <Link to ={'/counter/counter'}>카운터</Link>
            </li>
            <li>
            <Link to={'/counter/slice-container'}>슬라이스 카운터</Link>  
            </li>
            <li>
            <Link to={'/todos/to-do'}>Todo</Link>
            </li>
            <li>
            <Link to={'/todos/to-dos'}>todos</Link> 
            </li>
            <li>
            <Link to={'/todos/todo-app'}>TodoApp</Link> 
            </li>
            </>
            )
}
export default Home;