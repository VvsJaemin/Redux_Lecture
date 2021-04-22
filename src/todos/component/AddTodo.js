import React,{useState} from 'react'
import {useDispatch} from 'react-redux'

const AddTodo = ({addTodo}) => {

  const [title, setTitle] = useState("")
   
  const dispatch = useDispatch()
  const addTask =(value)=>{
    dispatch(addTodo(value))
    const taskInput = document.getElementById("new-task")
    taskInput.value = ""
  }

  const onSubmit =e=>{
    e.preventDefault()
    alert(`입력값 : ${title}`)
    addTask(title)
  }





      

    return (<>
     <p>
       <form onSubmit={onSubmit}><label htmlFor="new-task">할일추가</label>
       <input id="new-task" type="text" style={{width:500}} onChange={e=>setTitle(e.target.value)}/>
       <button style={{width:100, backgroundColor : 'green'}} type={"submit"} >Add</button>
       </form>
    </p>
    </>)
}

export default AddTodo