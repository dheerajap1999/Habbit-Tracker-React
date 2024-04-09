import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { deleteHabbit } from '../Redux/reducers/habbitTrackerReducer';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const allHabbitList = useSelector((state)=>state.habbitReducer.taskList)

  useEffect(()=>{
    if(allHabbitList.length ===0){
      toast.info('Please add a new task!',{position:"top-right",autoClose:2000})
      setTimeout(() => {
        Navigate('/create')
      }, 2500);
    }
  })


  

  // Sort tasks based on their date
  const sortedTasks = allHabbitList
  .map(task => ({ ...task, dateTime: new Date(task.dateTime).toISOString() })) // Convert dateTime strings to Date objects and then to ISO strings
  .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

  function handelUpdateHabbit(e,task) {
    e.preventDefault();
    Navigate('/update',{ replace: true , state: {data:task}})    
  }
  // Function to format date and time
function formatDateTime(dateTime) {
  const date = new Date(dateTime);
  return date.toLocaleString(); // Returns date and time in the user's locale format
}

  function handelDeleteHabbit(e,task){
    e.preventDefault();
    dispatch(deleteHabbit(task))
    toast.error(`${task.taskName} deleted successfully`,{autoClose:2000})
  }

  return (
    <>
      <h1 className='text-center'>All Task</h1>
      <div className='container d-flex justify-content-center'>
            <div className='card shadow bg-info  d-flex flex-column'>
              {/* looping to all habbits */}
              {sortedTasks.map((task,index)=>(
              <div key={index} className="p-2  d-flex justify-content-between align-items-center m-2 bg-secondary border rounded fw-bold text-light">&nbsp; {task.taskName}  
                  &nbsp;&nbsp;  {formatDateTime(task.dateTime)} &nbsp;&nbsp; {task.status} &nbsp;&nbsp;
                <div className='d-flex gap-2 flex-row justify-content-end'>
                    <button className={`btn btn-warning fw-bold ${task.status === "Done" ? "disabled" : ""}`} disabled={task.status === "Done"} onClick={(e)=>handelUpdateHabbit(e,task)}>Update <FontAwesomeIcon icon={faCircleUp} /></button>
                    <button className='btn btn-danger fw-bold '  onClick={(e)=>handelDeleteHabbit(e,task)}>Delete <FontAwesomeIcon icon={faTrash} /></button>
                </div>
              </div>
              ))}
            </div>
      </div>
      < ToastContainer />
    </>
  )
}

export default Home