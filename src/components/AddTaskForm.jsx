const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        {/* Add Task */}
        <div className='row add_task p-3 my-4 mx-1'>
          <div className='col'>
            <input
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
             className='form-control form-control-lg input_task'/>
          </div>
          <div className='col-auto'>
            <button
            onClick={addTask}
             className='btn btn-lg add_btn'>
              ADD TASK
            </button>
          </div>
        </div>
      </>
    )
  }
  
  export default AddTaskForm;