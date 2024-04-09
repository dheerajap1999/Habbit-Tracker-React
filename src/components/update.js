import React, { useState } from 'react'
import { faCircleUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { updateHabbit } from '../Redux/reducers/habbitTrackerReducer';
import { useNavigate } from 'react-router-dom';

function Update() {

    const {state} = useLocation();
    const Navigate = useNavigate();
    const [habbitData, setHabbitData] = useState(state.data);
    const formattedDateTime = new Date(habbitData.dateTime).toISOString().slice(0, 16); // Convert date-time string to the format accepted by datetime-local input
    const dispatch = useDispatch();

    function handelUpdateHabbit(e){
        e.preventDefault();
        let formData = new FormData(e.target);
        let formObject  = Object.fromEntries(formData.entries());
        dispatch(updateHabbit(formObject));
        toast.success(`${formObject.taskName} has been Updated`, {autoClose:2000})
        setTimeout(() => {
            Navigate('/')
        }, 2500);
    }


    return (
    <>
    <h1 className='text-center'>Update habbit</h1>
    <div className='m-3 d-flex justify-content-center'>
        <form className='card shadow p-3 w-50' onSubmit={(e)=>handelUpdateHabbit(e)}>
        <div class="mb-3">
            <label htmlFor='taskName'  className="form-label">Task Name</label>
            <input type="hidden" name='taskName' className="form-control"  id="taskName" value={habbitData.taskName} onChange={(e) => setHabbitData({ ...habbitData, taskName: e.target.value })} aria-describedby="emailHelp"/>
            <h2 className="form-text text-muted fw-bold border p-2">{habbitData.taskName}</h2>
        </div>
        <div className="mb-3">
            <label htmlFor="time" className="form-label">Date</label>
            <input type="datetime-local" name='dateTime' value={formattedDateTime} onChange={(e) => setHabbitData({ ...habbitData, dateTime: e.target.value })} className="form-control" id="time"/>
        </div>
        <div className="mb-3">
            <select class="form-select" name='status' value={habbitData.status} onChange={(e) => setHabbitData({ ...habbitData, status: e.target.value })} aria-label="Default select example">
              <option  selected>None</option>
              <option value="Done">Done</option>
              <option value="Not Done">Not Done</option>
            </select>
        </div>
        
        <button type="submit" className=" fw-bold btn btn-info">Update <FontAwesomeIcon icon={faCircleUp} /> </button>
        </form>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Update