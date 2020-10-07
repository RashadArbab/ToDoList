import React, {useState} from 'react'; 
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;

function List() {

    const[newTask, setNewTask] = useState('') ; 
    const[tasks , setTasks] = useState([]); 

    const tasksList = tasks.map((object, index)=>{
        return <div className='row justify-content-center' >
            <h2 className='col-md-6 text-left m-1' style={{paddingRight:'10px'}} >{index +1}. {object} </h2>
            <button  className='btn btn-danger col-md-1 m-1' onClick={()=>{deleteTask(index)}}  > delete </button>
           
        </div>

    })

    function deleteTask(index){
        
        var duplicateArray= [...tasks]
        duplicateArray.splice(index, 1)

        setTasks(duplicateArray) 

    }

    function addTask() {
        setTasks([...tasks, newTask]) ; 

    }

   

    return(
        <div > 
            <div className='row justify-content-center'>
            <h3 > School Tasks </h3>
            </div>

            <div className='row justify-content-center'>
            
            <input type="text" placeholder='new task' className='form-control col-md-6 row-md-1 m-1' style={{font:'message-box'}} value={newTask} onChange={(e)=>{setNewTask(e.target.value)}} /> 
            <button className='btn btn-primary col-md-1 m-1' onClick={addTask}>add task</button>
            <br/>
            </div>
            <div>
            <h1>{tasksList}</h1>
            </div>
        </div>

    );



}export default List; 