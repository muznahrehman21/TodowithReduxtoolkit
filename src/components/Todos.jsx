import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state=>state.todos)
    const dispatch=useDispatch()
  return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>(
        <li key={todo.id}>{todo.id}
        <button onClick={()=> dispatch(removeTodo(tood.id))}>X</button>
        
        </li>
    ))}
</>
  )

}

export default Todos