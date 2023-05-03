import React from 'react'
import './ShowProduct.css'

const ShowProduct = ({tasks, setTasks}) => {
  return(
    
   
    <ul>
       { tasks.map((task)=> (
            <div>
                <li>
                   <div>
                    <span> {task.name}</span>
                               
                   </div>
                    <div>
                    <span> {task.description}</span>
                    </div>
                    <div>
                    <span> {task.price}</span>
                    </div>
                    <button>Buy Large({task.l}) </button>  <button>Buy Medium({task.m})</button> <button>Buy Small({task.s})</button>
                    
                </li>
            </div>
        ))}
    </ul>
   
  )
}

export default ShowProduct