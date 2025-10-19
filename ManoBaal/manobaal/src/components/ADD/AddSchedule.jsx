import React from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../../App/scheduleSlice.js';
import { useNavigate } from 'react-router';


 

export const AddSchedule = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 



   const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const time = e.target.time.value;
    if (title && time) {
      const newTask = {
        id: Date.now(),
        title,
        time,
        done: false,
      };
      dispatch(addTask(newTask));
      e.target.reset();  
    } else {
      alert("Please fill in both fields.");
    }
    

    navigate('/schedule'); 
    

     






   }
  return (
    
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Task</h2>
                <form className="space-y-4">    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Task Title</label>
                        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter task title" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Time</label>
                        <input type="time" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200" onClick={() =>{handleAddTask}}>Add Task</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-500">      
                    After adding, you can view your tasks in the schedule.
                </p>

        </div>
</div>
  )
}

