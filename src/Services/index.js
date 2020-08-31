const { instance } = require("../config")

export const CourseService ={   
    GetAll:()=>{
        return  instance.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
    },
    
}