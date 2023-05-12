const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
      <>
        {/* Update Task */}
        <div className='row update_task p-3 my-4 mx-1'>
          <div className='col'>
            <input
            value={updateData && updateData.title}
            onChange={(e)=>changeTask(e)}
             className='form-control form-control-lg update_task'/>
          </div>
          <div className='col-auto'>
            <button
            onClick={updateTask}
             className='btn btn-lg update_btn '>
              UPDATE
            </button>
            <button
            onClick={cancelUpdate}
             className='btn btn-lg update_btn'>
               CANCEL
            </button>
          </div>
        </div> 
      </>
    )
  }
  
  export default UpdateForm;