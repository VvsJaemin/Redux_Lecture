import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
const AddTodo = ({addTodo}) => {

    const [input, setInput] = useState('')
    
    const dispatch = useDispatch()
    const addTask = (value) => {
      //플럭스  - 단방향 처리를 위해 
       dispatch(addTodo(value)) // 페이로드를 통해 값이 담겨져 있음, 디스패치는 액션을 담음
      const taskInput = document.getElementById("new-task")
        taskInput.value = "";
      }
    const onSubmit = e => {
        e.preventDefault()
        alert(`입력값: ${input}`)
        addTask(input)
    }  
   

    return (<>
     <p>
        <form onSubmit={onSubmit}><label htmlFor="new-task">할일 추가</label>
        <input id="new-task" type="text" style={{width:500}}  onChange = {e =>setInput(e.target.value) } />
        <button style={{width:100, backgroundColor:'green'}} type={"submit"} >Add</button></form>
    </p>
    </>)
}

export default AddTodo