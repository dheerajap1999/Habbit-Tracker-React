import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToList } from '../Redux/reducers/habbitTrackerReducer';
import { faSquarePlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';





function Create() {

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const listTask = useSelector((state)=>state.habbitReducer.taskList)

  function handelAddTask(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let formObj = Object.fromEntries(formData.entries());
    
    // Check if the task with the same name already exists in the list
    const existingTaskIndex = listTask.findIndex(item => item.taskName === formObj.taskName);
    
    if (existingTaskIndex !== -1){
      // Update the dateTime for the existing task
      toast.warning(`${formObj.taskName} already exists`, {autoClose:2000})
    }
    else{
      if (Object.values(formObj)[0] !== "") {
      dispatch(addToList(formObj)); // Dispatch action to update the list
      toast.success(`${formObj.taskName} has added`, {autoClose:2000})
      setTimeout(() => {
        Navigate('/')
      }, 2500);
      }
    }
  }

  return (
    <>
    <div className='m-3 d-flex justify-content-center'>
        <form className='card shadow p-3 w-50' onSubmit={(e)=>handelAddTask(e)}>
            <h5 className="card-title fw-bold text-center">Create a new task</h5>
        <div class="mb-3">
            <label htmlFor='taskName'  className="form-label">Task Name</label>
            <input type="text" required name='taskName' className="form-control" id="taskName" onChange={(e)=>e.target.value} aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="time" className="form-label">Date</label>
            <input type="datetime-local" required name='dateTime' className="form-control" id="time"/>
        </div>
        <div className="mb-3">
            <select class="form-select" name='status' aria-label="Default select example">
              <option  selected>None</option>
              <option value="Done">Done</option>
              <option value="Not Done">Not Done</option>
            </select>
        </div>
        
        <button type="submit" className="btn btn-secondary">Submit <FontAwesomeIcon icon={faSquarePlus} /> </button>
        </form>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Create