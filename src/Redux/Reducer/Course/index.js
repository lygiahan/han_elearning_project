import { GET_ALL } from "../../../action/type";

let initialCourse={
    dsCourse:[],
}


export const CourseReducer =(state =initialCourse,action)=>{
    switch (action.type) {
      case GET_ALL:
         state.dsCourse = action.data;
         return {...state}
      
        default:
            return state;
    }
}