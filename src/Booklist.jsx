const intialState={
  task:[],
}
const taskReducer=(state=intialState,action)=>{

  switch(action.type){
    case ADD_TASK:
      return {
      ...state,
      task:[...state.task,action.paylad]
    }
    case DELETE_TASK:
      const updatedTask=state.task.filter((curTax,index)=>{
        return index !==action.paylad
      })
      return {
        ...state,
        task:[...state.task,updatedTask]
      }
    default:
  }
}