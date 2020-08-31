import { CourseService } from "../Services"
import { GET_ALL } from "./type"


export const ReduxThunk =(type,data)=>{
    return{
        type,
        data
    }
}

export const actGetAll = ()=>{
    return async dispatch =>{
          try {
              let res = await CourseService.GetAll();
              dispatch(ReduxThunk(GET_ALL,res.data));
          } catch (error) {
              console.log(error);
          }
    }
}