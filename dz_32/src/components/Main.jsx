import React, {useState} from 'react';
import './Main.css';

function Main() {
   
const [tasks, setTasks] = useState([
    {id: 1, title: 'Learn React', complete: false},
    {id: 2, title: 'Learn React', complete: false},
    {id: 3, title: 'Learn React', complete: false},
])
 
const[input, setInput] = useState ('')


   function todoCompleted (id){
        setTasks(tasks.filter(task => {
            if (task.id === id) {
                task.complete =  !task.complete;
            }
            return task;
        }))
   }

   function removeTask(id){
        setTasks(tasks.filter(task => task.id !== id))
   }
   
function addTask (e) {
    if (e.code === 'Enter' && input.trim() !== ""){
        setTasks(tasks.concat([{id: Date.now(), title: input}]));
        setInput("");
    }
}
   return (
      <div>
       <h1>TODO APP</h1>
       <input value = {input} type="text" onKeyUpCapture={(e) => addTask(e)} onChange={(e) => setInput(e.target.value)}/>
       <div>
            {tasks && tasks.map(task => {
                return (
            <div className='taskStyle' key = {task.id}>
                <input type="checkbox"  onClick={() => todoCompleted(task.id)}/>
                <div className='taskName'>{task.title}</div>
                <div
                onClick={( )=> removeTask(task.id)} 
                className='close'>&times;</div>
            </div>
                );
            })}
       </div>
      </div>
    );
  }
  
  export default Main;