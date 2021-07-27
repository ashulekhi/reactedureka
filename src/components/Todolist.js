import { useState, useEffect } from "react"

function HighPrioritytask(){
    alert("This task is high priority")
}


function ToDos(){
    var [task,setTask] = useState("")
    var [todos,setTodos] = useState([])

    useEffect(()=>{
        if(task.indexOf("high")!=-1){
            HighPrioritytask()
        }
    })

    function handleTask(e){
       setTask(e.target.value)
    }

   var addTodo = ()=>{
        todos.push(task)
        console.log("tasks are" , todos)
        setTodos([...todos])
        

    }

    var completeTask = function(index){
        todos.splice(index,1) // for example go to index position and remove n element s
        setTodos([...todos])
    }

   return(
       <div>
           <input onChange={handleTask} className="form-control" placeholder="Enter the Task " />
           <button onClick={addTodo} className="btn btn-primary">Add</button>

           {todos.length>0 && <div>
            <h1>ToDo List</h1>
            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {todos.map((each,index)=>{
                    return  <tr key={index}>
                                  <th scope="row">{index+1}</th>
                                  <td>{each}</td>
                                  <td><button onClick={completeTask.bind(null,index)} className="btn btn-success">Complete</button></td>
                            </tr>
                })}
   
   
    
  </tbody>
</table>
              
           </div> }
       </div>
   )
}


export default ToDos